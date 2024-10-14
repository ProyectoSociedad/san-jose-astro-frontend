import { LogoIcon } from '@/components/icons/LogoIcon'
import { BarsIcon } from '@/components/icons/BarsIcon'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { useEffect, useState } from 'react'
const menuItems = [
	{
		text: 'Inicio',
		href: '#inicio',
		path: 'inicio'
	},
	{
		text: 'Malla curricular',
		href: '#malla-curricular',
		path: 'malla-curricular'
	},
	{
		text: 'Turno',
		href: '#turno',
		path: 'turno'
	},
	{
		text: 'Docentes',
		href: '#docentes',
		path: 'docentes'
	}
]

export const Header = () => {
	const [stateHamburguer, setStateHamburguer] = useState(false)
	const [navigation, setNavigation] = useState('')
	useEffect(() => {
		const sections = document.querySelectorAll('section')
		const handleScroll = () => {
			sections.forEach((section) => {
				const rect = section.getBoundingClientRect()
				if (rect.top <= 150 && rect.bottom >= 150) {
					setNavigation(section.id)
					return
				}
			})
			//Para la navegacion activa
		}
		document.addEventListener('scroll', handleScroll)
		return () => {
			//Para la navegacion activa
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<header className="sticky top-0 z-20 bg-white py-[22px] text-light-blue lg:py-[32px]">
			<nav className="container flex items-center justify-between gap-12">
				<a href="#inicio">
					<LogoIcon className="text-[153px] sm:text-[253px]" />
				</a>

				<ul className="relative z-[1] hidden flex-[1] items-center gap-[32px] py-[11px] pl-[33px] font-semibold lg:flex">
					{menuItems.map((menu, i) => (
						<li key={i}>
							<a
								href={menu.href}
								className={`group transition-colors hover:text-sand ${navigation === menu.path ? 'text-sand' : ''}`}
								onClick={() => setStateHamburguer((state) => !state)}
							>
								{menu.text}
								<hr
									className={`h-[3px] bg-sand transition-[width] group-hover:w-full ${navigation === menu.path ? 'w-full' : 'w-0'}`}
								/>
							</a>
						</li>
					))}
				</ul>
				<a
					href="#contacto"
					className="hidden rounded-lg bg-light-blue px-[24px] py-[10px] text-[14px] font-semibold text-white transition-colors hover:bg-sand lg:block"
				>
					Contacto
				</a>
				{/* Menu Mobile */}
				<div
					className={`fixed left-0 top-[69px] z-[1] h-[calc(100vh-69px)] w-full overflow-auto transition duration-300 sm:top-[85.36px] ${stateHamburguer ? 'translate-x-0' : 'translate-x-[-100%]'}`}
				>
					<ul className="flex min-h-[calc(100vh-69px)] flex-col items-center justify-center gap-[32px] bg-white py-[11px] font-semibold sm:min-h-[calc(100vh-85.36px)] lg:hidden">
						{menuItems.map((menu, i) => (
							<li key={i}>
								<a
									href={menu.href}
									className={`group text-charcoal-gray transition-colors hover:text-sand ${navigation === menu.path ? 'text-sand' : ''}`}
									onClick={() => setStateHamburguer((state) => !state)}
								>
									{menu.text}
									<hr
										className={`h-[3px] bg-sand transition-[width] group-hover:w-full ${navigation === menu.path ? 'w-full' : 'w-0'}`}
									/>
								</a>
							</li>
						))}
						<li>
							<a
								onClick={() => setStateHamburguer((state) => !state)}
								href="#contacto"
								className="block rounded-lg bg-light-blue px-[24px] py-[10px] text-[14px] font-semibold text-white transition-colors hover:bg-sand"
							>
								Contacto
							</a>
						</li>
					</ul>
				</div>
				<button
					className="text-charcoal-gray lg:hidden"
					onClick={() => setStateHamburguer((state) => !state)}
				>
					{stateHamburguer ? (
						<CloseIcon className="text-2xl sm:text-3xl" />
					) : (
						<BarsIcon className="text-xl sm:text-2xl" />
					)}
				</button>
			</nav>
		</header>
	)
}
