import Category from "../model/category.js";

export default {
  Query: {
    getCategory: (parent, args) => {
      return Category.find();
    },
  },

  Species: {
    category(parent) {
      console.log("parent is Species", parent);
      return Category.findById(parent.category);
    },
  },
  Mutation: {
    addCategory: (parent, args) => {
      console.log("add category", args);
      const newCategory = new Category(args);
      return newCategory.save();
    },
  },
};
