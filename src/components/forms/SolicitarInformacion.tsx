import useRecaptcha from '@/hooks/useRecaptcha'
import {
	// departamentos,
	turnos
} from '@/selects/data'
import { useState } from 'react'

interface Props {
	type: 'hero' | 'contacto'
}
export const SolicitarInformacion = ({ type }: Props) => {
	const [formData, setFormData] = useState({
		nombre: '',
		correo: '',
		celular: '',
		// departamento: '', // Asegúrate de que esta es la forma deseada de iniciar este campo
		turno: '',
		terms: false
	})
	const [loading, setLoading] = useState(false)
	// Aquí puedes manejar el envío a la API
	const { loadAndExecuteRecaptcha } = useRecaptcha()
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value, type } = e.target
		if (type === 'checkbox') {
			const { checked } = e.target as HTMLInputElement
			setFormData((prevState) => ({
				...prevState,
				[name]: checked
			}))
		} else {
			setFormData((prevState) => ({
				...prevState,
				[name]: value
			}))
		}
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setLoading(true)
		// Cargar y ejecutar reCAPTCHA al enviar el formulario
		const recaptchaToken = await loadAndExecuteRecaptcha('submit_form')

		try {
			const response = await fetch(
				'https://cursoagenteinmobiliarioperu.com/consultas/seguimiento.php',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						nomb_persona: formData.nombre,
						email_persona: formData.correo,
						cel_persona: formData.celular,
						depa: '15',
						prov: '',
						dis: '',
						turno: formData.turno,
						'g-recaptcha-response': recaptchaToken
					})
				}
			)

			const result = await response.json()
			console.log('Fetch success!')
			console.log(result)
			// Mostrar una alerta de éxito
			alert('Los datos se registraron correctamente.')
			// Habilitar el botón y restaurar el texto
			setLoading(false)

			// Mostrar el modal (este es un ejemplo de cómo podrías manejarlo)
			// Asegúrate de tener implementado el modal en tu componente

			// Resetear el formulario
			setFormData({
				nombre: '',
				correo: '',
				celular: '',
				// departamento: '',
				turno: '',
				terms: false
			})
		} catch (error) {
			console.error('Error al enviar los datos:', error)
			setLoading(false)
		}
	}
	return (
		<>
			{type === 'contacto' && (
				<div className="rounded-[12px] bg-white p-[17px] shadow-card-primary md:px-[52px] xl:px-[30px] xl:py-[30px]">
					<h3 className="text-charcoal-gray">Solicitar información</h3>
					<form className="mt-[22px] grid grid-cols-12 gap-4 xl:mt-[27px]" onSubmit={handleSubmit}>
						<input
							type="text"
							name="nombre"
							placeholder="Nombre"
							required
							className="col-span-full rounded-[12px] border border-sand bg-transparent px-4 py-3 text-light-gray outline-none placeholder:text-light-gray md:text-[14px] placeholder:md:text-[14px]"
							value={formData.nombre}
							onChange={handleChange}
						/>
						<input
							required
							type="email"
							name="correo"
							placeholder="Correo"
							className="col-span-full rounded-[12px] border border-sand bg-transparent px-4 py-3 text-light-gray outline-none placeholder:text-light-gray md:col-span-6 md:text-[14px] placeholder:md:text-[14px]"
							value={formData.correo}
							onChange={handleChange}
						/>
						<input
							type="number"
							name="celular"
							placeholder="Celular"
							className="col-span-full rounded-[12px] border border-sand bg-transparent px-4 py-3 text-light-gray outline-none placeholder:text-light-gray md:col-span-6 md:text-[14px] placeholder:md:text-[14px]"
							required
							value={formData.celular}
							onChange={handleChange}
						/>
						{/* <select
							name="departamento"
							value={formData.departamento}
							onChange={handleChange}
							className="col-span-full rounded-[12px] border border-sand bg-transparent px-4 py-3 text-light-gray outline-none placeholder:text-light-gray md:col-span-6 md:text-[14px] placeholder:md:text-[14px]"
							required
						>
							<option value="" disabled>
								Selecciona departamento
							</option>
							{departamentos.map((departamento) => (
								<option
									value={departamento.value}
									className="text-gray-500"
									key={departamento.value}
								>
									{departamento.nombre}
								</option>
							))}
						</select> */}
						<select
							className="col-span-full rounded-[12px] border border-sand bg-transparent px-4 py-3 text-light-gray outline-none placeholder:text-light-gray md:col-span-6 md:text-[14px] placeholder:md:text-[14px]"
							required
							name="turno"
							value={formData.turno}
							onChange={handleChange}
						>
							<option value="" disabled>
								Selecciona el turno
							</option>
							{turnos.map((turno) => (
								<option value={turno.value} className="text-gray-500" key={turno.value}>
									{turno.nombre}
								</option>
							))}
						</select>
						<div className="col-span-full flex items-center gap-2">
							<input
								type="checkbox"
								id="terms"
								required
								className="h-4 w-4 xl:h-[18px] xl:w-[18px]"
								name="terms"
								checked={formData.terms}
								onChange={handleChange}
							/>
							<label htmlFor="terms" className="text-[14px]">
								Acepto los términos y condiciones
							</label>
						</div>
						<button
							type="submit"
							className="col-span-full mx-auto mt-2 w-fit rounded-lg bg-light-blue px-[24px] py-[10px] text-[14px] font-semibold text-white transition-colors hover:bg-sand"
							disabled={loading}
						>
							{loading ? 'Cargando...' : '¡Enviar ahora!'}
						</button>
					</form>
				</div>
			)}
			{type === 'hero' && (
				<div className="space-y-6 rounded-[12px] bg-blue-sky p-[17px] text-white xl:px-[30px] xl:py-[30px]">
					<h3 className="text-center">Solicitar información</h3>
					<form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Nombre"
							required
							className="rounded-lg border border-white bg-transparent px-4 py-3 text-[14px] text-white outline-none placeholder:text-[14px] placeholder:text-white"
							name="nombre"
							value={formData.nombre}
							onChange={handleChange}
						/>
						<input
							required
							type="email"
							placeholder="Correo"
							className="rounded-lg border border-white bg-transparent px-4 py-3 text-[14px] text-white outline-none placeholder:text-[14px] placeholder:text-white"
							name="correo"
							value={formData.correo}
							onChange={handleChange}
						/>
						<input
							type="number"
							placeholder="Celular"
							className="rounded-lg border border-white bg-transparent px-4 py-3 text-[14px] text-white outline-none placeholder:text-[14px] placeholder:text-white"
							required
							name="celular"
							value={formData.celular}
							onChange={handleChange}
						/>
						{/* <select
							className="rounded-lg border border-white bg-transparent px-4 py-3 text-[14px] text-white outline-none placeholder:text-[14px] placeholder:text-white"
							required
							name="departamento"
							value={formData.departamento}
							onChange={handleChange}
						>
							<option value="" disabled>
								Selecciona departamento
							</option>
							{departamentos.map((departamento) => (
								<option
									value={departamento.value}
									className="text-gray-500"
									key={departamento.value}
								>
									{departamento.nombre}
								</option>
							))}
						</select> */}
						<select
							className="rounded-lg border border-white bg-transparent px-4 py-3 text-[14px] text-white outline-none placeholder:text-[14px] placeholder:text-white"
							required
							name="turno"
							value={formData.turno}
							onChange={handleChange}
						>
							<option value="" disabled>
								Selecciona el turno
							</option>
							{turnos.map((turno) => (
								<option value={turno.value} className="text-gray-500" key={turno.value}>
									{turno.nombre}
								</option>
							))}
						</select>
						{/* <!-- Checkbox para términos y condiciones --> */}
						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								id="terms-contacto"
								required
								className="h-4 w-4 xl:h-[18px] xl:w-[18px]"
								name="terms"
								checked={formData.terms}
								onChange={handleChange}
							/>
							<label htmlFor="terms-contacto" className="text-[14px]">
								Acepto los términos y condiciones
							</label>
						</div>
						<button
							type="submit"
							className="mx-auto mt-2 w-fit rounded-lg bg-white px-[24px] py-[10px] text-[14px] font-semibold text-light-blue transition-colors hover:bg-sand hover:text-white"
							disabled={loading}
						>
							{loading ? 'Cargando...' : '¡Enviar ahora!'}
						</button>
					</form>
				</div>
			)}
		</>
	)
}
