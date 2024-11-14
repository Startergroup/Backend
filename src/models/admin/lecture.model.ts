import {
  Table,
  Model,
  AutoIncrement,
  PrimaryKey,
  Column,
  ForeignKey
} from 'sequelize-typescript'
import { DataTypes } from 'sequelize'

import ScheduleModel from './schedule.model'

@Table({
  tableName: 'lectures',
  paranoid: false,
  timestamps: false
})
class LectureModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.INTEGER)
  lecture_id: number

  @ForeignKey(() => ScheduleModel)
  @Column(DataTypes.INTEGER)
  schedule_id: number

  @Column(DataTypes.STRING)
  name: string

  @Column(DataTypes.STRING)
  city: string

  @Column(DataTypes.STRING)
  company: string

  @Column(DataTypes.INTEGER)
  start: number

  @Column(DataTypes.INTEGER)
  end: number

  @Column(DataTypes.STRING)
  fio: string

  @Column(DataTypes.INTEGER)
  section_name: string

  @Column(DataTypes.INTEGER)
  section_id: number
}

export default LectureModel