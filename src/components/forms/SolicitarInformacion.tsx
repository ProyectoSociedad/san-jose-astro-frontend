import { departamentos, turnos } from '@/selects/data'
import { useState } from 'react'

interface Props {
	type: 'hero' | 'contacto'
}
export const SolicitarInformacion = ({ type }: Props) => {
	const [formData, setFormData] = useState({
		nombre: '',
		correo: '',
		celular: '',
		departamento: '', // Asegúrate de que esta es la forma deseada de iniciar este campo
		turno: '',
		terms: false
	})
	const [loading, setLoading] = useState(false)
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
		// Aquí puedes manejar el envío a la API

		try {
			const response = await fetch(
				'https://cursoagenteinmobiliarioperu.com/consultas-2/seguimiento.php',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						nomb_persona: formData.nombre,
						email_persona: formData.correo,
						cel_persona: formData.celular,
						depa: formData.departamento,
						prov: '',
						dis: '',
						turno: formData.turno
					})
				}
			)

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

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
				departamento: '',
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
				<div className="mx-auto max-w-[358px] space-y-6 rounded-[53px] bg-white p-5 sm:max-w-[458px] sm:px-[40px] sm:py-[35px]">
					<h2 className="text-center text-[20px] font-semibold text-semi-dark-blue">
						SOLICITA INFORMACIÓN
					</h2>
					<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
						<input
							type="text"
							name="nombre"
							placeholder="Nombre"
							required
							className="rounded-lg border-2 border-semi-dark-blue bg-transparent px-4 py-3 text-semi-dark-blue outline-none placeholder:text-semi-dark-blue"
							value={formData.nombre}
							onChange={handleChange}
						/>
						<input
							required
							type="email"
							name="correo"
							placeholder="Correo"
							className="rounded-lg border-2 border-semi-dark-blue bg-transparent px-4 py-3 text-semi-dark-blue outline-none placeholder:text-semi-dark-blue"
							value={formData.correo}
							onChange={handleChange}
						/>
						<input
							type="number"
							name="celular"
							placeholder="Celular"
							className="rounded-lg border-2 border-semi-dark-blue bg-transparent px-4 py-3 text-semi-dark-blue outline-none placeholder:text-semi-dark-blue"
							required
							value={formData.celular}
							onChange={handleChange}
						/>
						<select
							name="departamento"
							value={formData.departamento}
							onChange={handleChange}
							className="block rounded-lg border-2 border-semi-dark-blue bg-transparent px-4 py-3 text-semi-dark-blue outline-none placeholder:text-semi-dark-blue"
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
						</select>
						<select
							className="rounded-lg border-2 border-semi-dark-blue bg-transparent px-4 py-3 text-semi-dark-blue outline-none placeholder:text-white"
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
						<div className="flex items-center gap-4">
							<input
								type="checkbox"
								id="terms-contacto"
								required
								className="h-4 w-4"
								name="terms"
								checked={formData.terms}
								onChange={handleChange}
							/>
							<label htmlFor="terms-contacto">Acepto los términos y condiciones</label>
						</div>
						<button
							type="submit"
							className="mx-auto w-fit rounded-lg bg-light-mustard px-4 py-3.5 font-semibold text-semi-dark-blue"
							disabled={loading}
						>
							{loading ? 'Cargando...' : 'Solicitar'}
						</button>
					</form>
				</div>
			)}
			{type === 'hero' && (
				<div className="relative z-10 space-y-6">
					<h2 className="text-center text-[20px] font-semibold">SOLICITAR INFORMACIÓN</h2>
					<form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Nombre"
							required
							className="rounded-lg border-2 border-white bg-transparent px-4 py-3 text-white outline-none placeholder:text-white"
							name="nombre"
							value={formData.nombre}
							onChange={handleChange}
						/>
						<input
							required
							type="email"
							placeholder="Correo"
							className="rounded-lg border-2 border-white bg-transparent px-4 py-3 text-white outline-none placeholder:text-white"
							name="correo"
							value={formData.correo}
							onChange={handleChange}
						/>
						<input
							type="number"
							placeholder="Celular"
							className="rounded-lg border-2 border-white bg-transparent px-4 py-3 text-white outline-none placeholder:text-white"
							required
							name="celular"
							value={formData.celular}
							onChange={handleChange}
						/>
						<select
							className="rounded-lg border-2 border-white bg-transparent px-4 py-3 text-white outline-none placeholder:text-white"
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
						</select>
						<select
							className="rounded-lg border-2 border-white bg-transparent px-4 py-3 text-white outline-none placeholder:text-white"
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
						<div className="flex items-center gap-4">
							<input
								type="checkbox"
								id="terms"
								required
								className="h-4 w-4"
								name="terms"
								checked={formData.terms}
								onChange={handleChange}
							/>
							<label htmlFor="terms">Acepto los términos y condiciones</label>
						</div>
						<button
							type="submit"
							className="mx-auto w-fit rounded-lg bg-light-mustard px-4 py-3 font-semibold text-semi-dark-blue"
							disabled={loading}
						>
							{loading ? 'Cargando...' : 'Empieza ahora'}
						</button>
					</form>
				</div>
			)}
		</>
	)
}
