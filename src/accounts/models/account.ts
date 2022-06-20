
import { Sequelize, Model, Table, Column } from 'sequelize-typescript';



@Table
export default class Account extends Model {
    @Column
    name?: string;

    @Column
    pass?: string;

    // constructor(password: string) {
    //     super();
    //     this.password = password
    // }
}


