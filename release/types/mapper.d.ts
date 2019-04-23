/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import { Entity } from './entity';
/**
 * Messages mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the message that corresponds to the specified message Id.
     * @param id Message Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the message entity.
     * @throws Throws an error when the message wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity | undefined>;
    /**
     * List all messages that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the message list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all messages that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of messages or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the message that corresponds to the specified message Id.
     * @param id Message Id.
     * @returns Returns a promise to get true when the message was deleted, false otherwise.
     */
    remove(id: string): Promise<boolean>;
}
