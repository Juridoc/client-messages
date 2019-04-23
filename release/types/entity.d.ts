/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Profiles from '@juridoc/client-profiles';
/**
 * Message entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Message Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile entity.
     */
    profile: Profiles.Entity;
    /**
     * Context Id.
     */
    contextId: string;
    /**
     * List of target grants.
     */
    grantsIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Message text.
     */
    text: string;
}
