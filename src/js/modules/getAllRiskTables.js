
export const getAllRiskTables = () => {

  return Promise.all([
    d3.json('../common/get_tables.php?table=companies'),
    d3.json('../common/get_tables.php?table=departments'),
    d3.json('../common/get_tables.php?table=processes'),
    d3.json('../common/get_risks.php')
  ]).then(
    ([companies, departments, processes, risks]) => {
      return [companies, departments, processes, risks];
    }
  );

}
