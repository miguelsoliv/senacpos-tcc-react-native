export const changeDayNames = (daysArray) => {
  const newDaysName = daysArray.map((day) => {
    switch (day) {
      case 'Domingo':
        return 'Sunday'
      case 'Segunda':
        return 'Monday'
      case 'Terça':
        return 'Tuesday'
      case 'Quarta':
        return 'Wednesday'
      case 'Quinta':
        return 'Thursday'
      case 'Sexta':
        return 'Friday'
      case 'Sábado':
        return 'Saturday'
    }
  })

  return newDaysName
}
