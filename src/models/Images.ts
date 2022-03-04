import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Orphanages from "./Orphanage";

@Entity({ name: 'images'})
export default class Image {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  path: string;

  @ManyToOne(()=> Orphanages, Orphanages => Orphanages.images)
  @JoinColumn({ name: 'orphanage_id'})
  orphanage: Orphanages
}