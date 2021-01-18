
export const getAllRiskTables = () => {

  return Promise.all([
    d3.json('../common/get_tables.php?table=companies'),
    d3.json('../common/get_tables.php?table=departments'),
    d3.json('../common/get_tables.php?table=processes'),
    d3.json('../common/get_risks.php')
  ]).then(
    ([companies, departments, processes, risks]) => {

      // Each risk will be plotted in a band, need to position it to avoid over plotting
      // Will use a simple random approach for simplicity (can improve later)

      for (const risk in risks) {
        risks[risk].bin = risks[risk].severity_rating + "_" + risks[risk].prob_rating
      }

      let risks1 = d3.group(risks, d => d.bin)
      let risks2 = d3.rollup(risks, v => v.length, d => d.bin)

      console.log(risks);



      return [companies, departments, processes, risks];
    }
  );

}
