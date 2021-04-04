import Species from "../model/species.js";
export default {
  Animal: {
    species(parent) {
      console.log("parent", parent);
      return Species.findById(parent.species);
    },
  },

  Mutation: {
    addSpecies: (parent, args) => {
      console.log("add category", args);
      const newSpecies = new Species(args);
      return newSpecies.save();
    },
  },
};
