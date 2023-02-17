export const getMyRecord = async () => new Promise((resolve, reject) => {
  const fakeRecord = {
    message: 'success',
    data: {
      id: 1,
      basicInfo: {
        name: 'Nguyen Van A',
        age: 39,
        email: 'ANguyen@gmail.com',
        mobileNumber: '1234567809',
        address: '1 Nguyen Trai, Dist.5, Ho Chi Minh City'
      },
      healthInfo: {
        duration: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
        datasets: {
          originalHealthData: [100, 90, 90, 88, 81, 81, 80, 85, 79, 76, 70, 69],
          recordedHealthData: [100, 80, 93, 85, 81, 77, 76, 60, 65, 71, 70, 68],
        },
        progressPercent: 70
      }
    }
  }
  return resolve(fakeRecord);
})

export const getMealsList = async () => new Promise((resolve, reject) => {
  const fakeMealsList = [
    {
      id: 1,
      date: '01-05-2021',
      session: 'morning'
    },
    {
      id: 2,
      date: '01-05-2021',
      session: 'lunch'
    },
    {
      id: 3,
      date: '01-05-2021',
      session: 'dinner'
    },
    {
      id: 4,
      date: '01-05-2021',
      session: 'snack'
    },
    {
      id: 5,
      date: '01-05-2021',
      session: 'morning'
    },
    {
      id: 6,
      date: '01-05-2021',
      session: 'lunch'
    },
    {
      id: 7,
      date: '01-05-2021',
      session: 'dinner'
    },
    {
      id: 8,
      date: '01-05-2021',
      session: 'snack'
    },
    {
      id: 9,
      date: '01-05-2021',
      session: 'morning'
    },
    {
      id: 10,
      date: '01-05-2021',
      session: 'lunch'
    },
    {
      id: 11,
      date: '01-05-2021',
      session: 'dinner'
    },
    {
      id: 12,
      date: '01-05-2021',
      session: 'snack'
    },
    {
      id: 13,
      date: '01-05-2021',
      session: 'morning'
    },
    {
      id: 14,
      date: '01-05-2021',
      session: 'lunch'
    },
    {
      id: 15,
      date: '01-05-2021',
      session: 'dinner'
    },
    {
      id: 16,
      date: '01-05-2021',
      session: 'snack'
    },
    {
      id: 17,
      date: '01-05-2021',
      session: 'morning'
    },
    {
      id: 18,
      date: '01-05-2021',
      session: 'lunch'
    },
    {
      id: 19,
      date: '01-05-2021',
      session: 'dinner'
    },
    {
      id: 20,
      date: '01-05-2021',
      session: 'snack'
    },
    {
      id: 21,
      date: '01-05-2021',
      session: 'morning'
    },
    {
      id: 22,
      date: '01-05-2021',
      session: 'lunch'
    },
    {
      id: 23,
      date: '01-05-2021',
      session: 'dinner'
    },
    {
      id: 24,
      date: '01-05-2021',
      session: 'snack'
    },
    {
      id: 25,
      date: '01-05-2021',
      session: 'morning'
    },
    {
      id: 26,
      date: '01-05-2021',
      session: 'lunch'
    },
    {
      id: 27,
      date: '01-05-2021',
      session: 'dinner'
    },
    {
      id: 28,
      date: '01-05-2021',
      session: 'snack'
    },
    {
      id: 29,
      date: '01-05-2021',
      session: 'morning'
    },
    {
      id: 30,
      date: '01-05-2021',
      session: 'lunch'
    },
    {
      id: 31,
      date: '01-05-2021',
      session: 'dinner'
    },
    {
      id: 8,
      date: '01-05-2021',
      session: 'snack'
    },
    {
      id: 32,
      date: '01-05-2021',
      session: 'morning'
    },
    {
      id: 33,
      date: '01-05-2021',
      session: 'lunch'
    },
    {
      id: 34,
      date: '01-05-2021',
      session: 'dinner'
    },
    {
      id: 35,
      date: '01-05-2021',
      session: 'snack'
    },
  ]
})
