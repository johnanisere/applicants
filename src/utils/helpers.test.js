import * as helpers from "./helpers";

function setup() {
  const expectedAge = 26;
  const dob = "1993-10-05";
  const list = [
    {
      id: 1,
      name: "Alvin Satterfield",
      email: "cornellbartell@connellyleannon.biz",
      birth_date: "1997-09-07",
      year_of_experience: 5,
      position_applied: "Technician",
      application_date: "2018-07-02",
      status: "rejected"
    },
    {
      id: 2,
      name: "Colette Morar",
      email: "corinnestark@pacocha.co",
      birth_date: "1998-08-03",
      year_of_experience: 3,
      position_applied: "Designer",
      application_date: "2017-11-18",
      status: "waiting"
    }
  ];
  const expectedList = [
    {
      id: 1,
      name: "Alvin Satterfield",
      email: "cornellbartell@connellyleannon.biz",
      birth_date: "1997-09-07",
      year_of_experience: 5,
      position_applied: "Technician",
      application_date: "2018-07-02",
      status: "rejected"
    }
  ];
  return {
    dob,
    list,
    expectedAge,
    expectedList
  };
}
describe("async actions", () => {
  const { dob, list, expectedAge, expectedList } = setup();

  it(`should return 25 as age`, () => {
    const actual = helpers.getAge(dob);
    expect(actual).toEqual(expectedAge);
  });

  it(`should filter list and return a new list`, () => {
    const actualList = helpers.onFilter("status", list, "rejected");
    expect(actualList).toEqual(expectedList);
  });

  it(`should string of string of whitespaces and replace them with _`, () => {
    expect(helpers.onStrip("Position applied")).toEqual(
      expect.stringContaining("position_applied")
    );
  });

  it(`should string of _ and replace them with whitespaces`, () => {
    expect(helpers.unStrip("position_applied")).toEqual(
      expect.stringContaining("position applied")
    );
  });

  it(`should sort array in descending order`, () => {
    expect(helpers.onSort("year_of_experience", list)).toEqual(list);
  });
});
