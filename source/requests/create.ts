/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Message creation request.
 */
@RestDB.Schema.Entity('messages')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Message text.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(1, 1024)
  @Class.Public()
  public text!: string;
}
