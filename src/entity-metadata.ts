import {EntityMetadataMap} from "@ngrx/data";

const entityMetadata: EntityMetadataMap = {
  Product: {  }
};

const pluralNames = { Product: 'Products' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
