### In TypeScript, one of the powerful features that allow us to create complex types are Union and Intersection types. These types provide us with the ability to create new types from existing ones, leading to more flexible and reusable code.

# Union type

A union type allows you to specify a value that can be one of several types. This means that a variable or parameter can be assigned one of multiple possible types. The | (pipe) symbol is used to define union types.
1. You can define a type that can hold different types of values, which is particularly useful when you don't know which type a value will be, but still want to enforce constraints on the possible types.
2. union types allow different types,
3. Union types are useful when you need to deal with a range of valid options
## example: 

```
type Circle = { shape: 'circle'; radius: number };
type Square = { shape: 'square'; sideLength: number };

type Shape = Circle | Square; //this is union type

function area(shape: Shape): number {
  if (shape.shape === 'circle') {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}
```

#  Intersection Types

An intersection type combines multiple types into one. It allows you to specify that a value must satisfy all the types in the intersection. The ( & ) symbol is used to define intersection types.

1.  Intersection types allow you to combine multiple types into a single type that has all the properties of each type.
2. This is useful when you want to create complex types by combining simpler ones.
3. You can create new types that are a mix of several existing types, which allows for more flexibility while maintaining type safety.



## example
```
type User = { name: string; email: string };
type Permissions = { canEdit: boolean; canDelete: boolean };

type AdminUser = User & Permissions; // intersection types

const admin: AdminUser = {
  name: "John",
  email: "john@example.com",
  canEdit: true,
  canDelete: true
}; 
```

