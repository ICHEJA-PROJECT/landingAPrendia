import { CardDash } from "../molecules"
import { DocumentIcon, CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid"

export const CardsDash = ({
   totalRegistros = 0,
   registrosAtendidos = 0,
   registrosNoAtendidos = 0
}) => {
   return (
      <section className="flex gap-6 w-full">
         <div className="flex-1">
            <CardDash
               title="Total registros"
               count={totalRegistros.toString()}
               titleColor="#6B7280"
               icon={DocumentIcon}
               iconColor="#6B7280"
            />
         </div>

         <div className="flex-1">
            <CardDash
               title="Registros atendidos"
               count={registrosAtendidos.toString()}
               titleColor="#10B981"
               icon={CheckCircleIcon}
               iconColor="#10B981"
            />
         </div>

         <div className="flex-1">
            <CardDash
               title="Registros no atendidos"
               count={registrosNoAtendidos.toString()}
               titleColor="#F97316"
               icon={InformationCircleIcon}
               iconColor="#F97316"
            />
         </div>
      </section>
   )
}
