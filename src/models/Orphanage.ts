import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Image from "./Images";

@Entity()
export default class Orphanages {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  @OneToMany(()=> Image, Image => Image.orphanage, {
    cascade: ['insert', 'update']
  } )
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[]
}