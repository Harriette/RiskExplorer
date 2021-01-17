

export const setupRiskDetailsPanel = (selection, {risks}) => {

  let table = selection.append('table').append('tbody')
    .selectAll('tr')
    .data(risks)
    .join(enter => {
      let rw = enter.append('tr')
      rw.append('th')
        .text('Name')
      rw.append('td')
        .text(d => d.name)
      return rw
    }

    )


}
