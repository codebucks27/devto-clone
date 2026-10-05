import { buildQueries, queries, queryHelpers, within } from "@testing-library/react";

// The original loading placeholders and hamburger control have no role or label.
// Custom Testing Library queries let compatibility tests locate those elements
// without changing their existing markup or adding production-only test IDs.
const queryAllByClassName = (container, className, options) =>
  queryHelpers.queryAllByAttribute(
    "class",
    container,
    (value) => className.split(/\s+/).every((name) => value.split(/\s+/).includes(name)),
    options
  );

const [queryByClassName, getAllByClassName, getByClassName, findAllByClassName, findByClassName] = buildQueries(
  queryAllByClassName,
  (_container, className) => `Found multiple elements with class "${className}"`,
  (_container, className) => `Unable to find an element with class "${className}"`
);

export const classQueries = {
  ...queries,
  queryByClassName,
  queryAllByClassName,
  getAllByClassName,
  getByClassName,
  findAllByClassName,
  findByClassName,
};

export const screen = within(document.body, classQueries);
