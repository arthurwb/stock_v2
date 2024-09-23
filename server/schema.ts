import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  integer,
  relationship,
  password,
  timestamp,
  decimal,
} from '@keystone-6/core/fields';

export const lists = {
  tOptions: list({
    access: allowAll,
    graphql: {
      plural: 'OptionsList',
    },
    fields: {
      optionName: text({ validation: { isRequired: true } }),
      price: decimal({ precision: 10, scale: 2, validation: { isRequired: true } }),
      historicalPrices: relationship({ ref: 'tHistoricalPrices.optionId', many: true }),
      carrots: relationship({ ref: 'tCarrots.optionId', many: true }), 
    },
  }),

  tHistoricalPrices: list({
    access: allowAll,
    graphql: {
      plural: 'HistoricalPricesList',
    },
    fields: {
      optionId: relationship({ ref: 'tOptions.historicalPrices' }),
      historicalPrice: decimal({ precision: 10, scale: 2, validation: { isRequired: true } }),
      dateRecorded: timestamp({
        defaultValue: { kind: 'now' },
      }),
    },
  }),

  tUsers: list({
    access: allowAll,
    graphql: {
      plural: 'UsersList',
    },
    fields: {
      username: text({ validation: { isRequired: true }, isIndexed: 'unique' }), 
      password: password({ validation: { isRequired: true } }),
      wallet: decimal({ precision: 10, scale: 2, validation: { isRequired: true } }),
      carrots: relationship({ ref: 'tCarrots.userId', many: true }),
    },
  }),

  tCarrots: list({
    access: allowAll,
    graphql: {
      plural: 'CarrotsList',
    },
    fields: {
      userId: relationship({ ref: 'tUsers.carrots' }),
      optionId: relationship({ ref: 'tOptions.carrots' }),
      purchasePrice: decimal({ precision: 10, scale: 2, validation: { isRequired: true } }),
      datePurchased: timestamp({
        defaultValue: { kind: 'now' },
      }),
    },
  }),
};
