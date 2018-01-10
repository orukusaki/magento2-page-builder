/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {DataObject} from "../../data-store";
import AppearanceInterface from "../appearance-interface";

export default class AlignBottom implements AppearanceInterface {
    /**
     * Apply align bottom appearance
     *
     * @param {DataObject} data
     * @returns {DataObject}
     */
    public add(data: DataObject): DataObject {
        data.align_self = "flex-end";
        return data;
    }
}
