import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import { object, string, array, boolean, number } from 'yup'
import Orphanages from '../models/Orphanage';
import orphanageView from '../views/orphanages_view'

class Orphanage {
  async index(req: Request, res: Response) {
    const repo = getRepository(Orphanages);

    const result = await repo.find({ relations: ['images']});

    res.json(orphanageView.renderMany(result));
  }

  async show(req: Request, res: Response){
    try{
      const { id } = req.params

      const repo = getRepository(Orphanages);

      const result = await repo.findOneOrFail({
        where:{
          id
        },
        relations: ['images']
      })

    res.status(200).json(orphanageView.render(result));
    }catch(err){
      return console.log(err);
    }
  }

  async handle(req: Request, res: Response){
    
   try {
    const repo = getRepository(Orphanages);
    
    const { 
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const imagesFiles = req.files as Express.Multer.File[];

    const images = imagesFiles.map(image => {
      return { path: image.filename }
    });

    const schema = object().shape({
      name: string().required(),
      latitude: number().required(),
      longitude: number().required(),
      about: string().required(),
      instructions: string().required(),
      opening_hours: string().required(),
      open_on_weekends: boolean().required(),
      images: array(object().shape({
        path: string().required()
      }))
    })

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images
    }

    await schema.validate(data)

    const orphanage = repo.create(data)

    await repo.save(orphanage)

    res.status(200).json(orphanageView.render(orphanage))
   }catch(err){
     console.log(err)
   }
  }
}

export default new Orphanage() ;