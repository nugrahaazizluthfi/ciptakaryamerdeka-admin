"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require("slugify");

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (data.content_title) {
        data.slug = slugify(data.content_title, { lower: true });
      }
    },
    async beforeUpdate(params, data) {
      if (data.content_title) {
        data.slug = slugify(data.content_title, { lower: true });
      }
    },
  },
};
