import fetchData from "../__mocks__/https";

const fetchPlanesData= () => fetchData()
.then((plane) => {
  const planes = []
  plane.forEach((plane) => {
    planes.push(plane)
  }
  )
  return planes
})

export default fetchPlanesData;