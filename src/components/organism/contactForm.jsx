import Input from "../atoms/input"
import Select from "../atoms/select"
import TextArea from "../atoms/textarea"

const ContactForm = () => {
  return (
    <form className="w-full mt-12 space-y-6">
      {/* Datos de la persona de contacto */}
      <div className="w-full">
        <h3 className="text-2xl font-bold text-pink-ia mb-4">Datos de la persona de contacto</h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Comunidad - ocupa 1 columna */}
          <Select
            label="Comunidad a la que pertenece el beneficiario"
            name="comunidad"
            options={["CAM"]}
            required
            placeholder="CAM"
          />
          <Input
            label="Nombre(s)"
            name="nombre"
            placeholder="Víctor"
            required
          />

          <Input
            label="Apellidos"
            name="apellidos"
            placeholder="Perez Constantino"
            required
          />

          <Input
            label="Número de teléfono"
            name="telefono"
            type="tel"
            placeholder="9637894562"
            required
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="villalobos@gmail.com"
            required
          />

          <Input
            label="Calle"
            name="calle"
            placeholder="Séptima Oriente"
            required
          />

          <Input
            label="Número exterior"
            name="numero_exterior"
            placeholder="0"
            required
          />

          <Input
            label="Código postal"
            name="codigo_postal"
            placeholder="30040"
            required
          />

          <Select
            label="Colonia"
            name="colonia"
            options={[]}
            required
          />

          <Input
            label="Municipio"
            name="municipio"
            placeholder="Tuxtla Gutiérrez"
            required
          />

          <Input
            label="Estado"
            name="estado"
            placeholder="Chiapas"
            required
          />

          {/* Por qué me interesa - ocupa 2 columnas */}
          <div className="col-span-2">
            <TextArea
              label="Por qué me interesa"
              name="motivo"
              placeholder="Hola estoy intersado en la aplicación APRENDIA  y quisiera que me contacten para recibir más información."
              required
              rows={4}
            />
          </div>

          {/* Botón Enviar - ocupa 2 columnas */}
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-pink-ia text-white px-10 py-3 rounded-lg text-xl font-bold transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105 hover:shadow-xl flex items-center gap-3"
            >
              Enviar
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
