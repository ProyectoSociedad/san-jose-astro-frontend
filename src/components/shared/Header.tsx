import { LogoIcon } from '@/components/icons/LogoIcon'
import { BarsIcon } from '@/components/icons/BarsIcon'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { useEffect, useState } from 'react'
const menuItems = [
	{
		text: 'Presentación',
		href: '#presentacion',
		path: 'presentacion'
	},
	{
		text: 'Turno',
		href: '#turno',
		path: 'turno'
	},
	{
		text: 'Malla curricular',
		href: '#malla-curricular',
		path: 'malla-curricular'
	},
	{
		text: 'Contacto',
		href: '#contacto',
		path: 'contacto'
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
		<header className="sticky top-0 z-20 bg-light-blue py-[22px] text-white lg:py-[32px]">
			<nav className="container flex items-center justify-between">
				<LogoIcon className="text-[153px] sm:text-[253px]" />

				<ul className="relative z-[1] hidden items-center gap-[32px] py-[11px] pl-[33px] font-semibold lg:flex">
					{menuItems.map((menu, i) => (
						<li key={i}>
							<a
								href={menu.href}
								className={`transition-colors hover:text-light-mustard ${navigation === menu.path ? 'text-light-mustard' : ''}`}
								onClick={() => setStateHamburguer((state) => !state)}
							>
								{menu.text}
							</a>
						</li>
					))}

					{/* <li>
						<a href="#" className="transition-colors hover:text-light-mustard">
							Convenio
						</a>
					</li> */}
					<li className="absolute inset-0 right-[-3rem] z-[-1] rounded-[50px_0_0_50px] border-b-2 border-l-2 border-t-2 border-light-mustard xl:right-[-4rem]" />
				</ul>
				{/* Menu Mobile */}
				<div
					className={`fixed left-0 top-[69px] z-[1] h-[calc(100vh-69px)] w-full overflow-auto transition duration-300 sm:top-[85.36px] ${stateHamburguer ? 'translate-x-0' : 'translate-x-[-100%]'}`}
				>
					<ul className="flex min-h-[calc(100vh-69px)] flex-col items-center justify-center gap-[32px] bg-light-blue py-[11px] font-semibold sm:min-h-[calc(100vh-85.36px)] lg:hidden">
						{menuItems.map((menu, i) => (
							<li key={i}>
								<a
									href={menu.href}
									className={`transition-colors hover:text-light-mustard ${navigation === menu.path ? 'text-light-mustard' : ''}`}
									onClick={() => setStateHamburguer((state) => !state)}
								>
									{menu.text}
								</a>
							</li>
						))}
					</ul>
				</div>
				<button className="lg:hidden" onClick={() => setStateHamburguer((state) => !state)}>
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
