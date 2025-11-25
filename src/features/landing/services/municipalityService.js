export const getMunicipalitiesByState = async (stateId) => {
  try {
    // Use proxy route during development, direct URL for production
    const apiUrl = process.env.NODE_ENV === 'development'
      ? `/api/core/municipalities/state/${stateId}`
      : `${import.meta.env.VITE_API_CORE}/municipalities/state/${stateId}`

    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error('Error al obtener municipios')
    }

    const data = await response.json()

    const municipalityNames = data.data.map(municipality => municipality.nombre)

    return municipalityNames
  } catch (error) {
    console.error("Error al obtener municipios:", error)
    return []
  }
}
