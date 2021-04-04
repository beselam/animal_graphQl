import Animal from "../model/animal.js";

export default {
  Query: {
    animals: (parent, args) => {
      return Animal.find();
    },
    getAnimalById: (parent, args) => {
      return Animal.findById(args.id);
    },
  },

  Mutation: {
    addAnimal: (parent, args) => {
      console.log("add animal", args);
      const newAnimal = new Animal(args);
      return newAnimal.save();
    },

    modifyAnimal: (parent, args) => {
      console.log("modify animal", args);

      return Animal.findByIdAndUpdate(args.id, args);
    },
  },
};
