function getPersons(name, age) {
    return [
      {
        name: name,
        age: age
      },

      Object.assign({}, { name, age }),

      Object.create({}, {
        name: {
          value: name,
          enumerable: true
        },
        age: {
          value: age,
          enumerable: true
        }
      }),

      Object.setPrototypeOf({}, { name, age })
    ];
};
