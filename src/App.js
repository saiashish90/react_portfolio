import React, { useRef, useEffect, useCallback } from 'react';

import Header from './header/header';
import Home from './home';
import About from './about';
import useWindowSize from './hooks/useWindowSize';

import './css/styles.css';
import './css/App.css';

function App() {
	const size = useWindowSize();
	const app = useRef();
	const scrollContainer = useRef();

	// Configs
	const data = {
		ease     : 0.1,
		current  : 0,
		previous : 0,
		rounded  : 0
	};
	// Scrolling
	const skewScrolling = useCallback(
		() => {
			//Set Current to the scroll position amount
			data.current = window.scrollY;
			// Set Previous to the scroll previous position
			data.previous += (data.current - data.previous) * data.ease;
			// Set rounded to
			data.rounded = Math.round(data.previous * 100) / 100;

			// Difference between
			const difference = data.current - data.rounded;
			const acceleration = difference / size.width;
			const velocity = +acceleration;
			const skew = velocity * 7.5;

			//Assign skew and smooth scrolling to the scroll container
			scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

			//loop vai raf
			requestAnimationFrame(() => skewScrolling());
		},
		[ data, size.width ]
	);

	// Run scrollrender once page is loaded.
	useEffect(
		() => {
			requestAnimationFrame(() => skewScrolling());
		},
		[ skewScrolling ]
	);
	//set the height of the body.
	useEffect(
		() => {
			setBodyHeight();
		},
		[ size.height ]
	);

	//Set the height of the body to the height of the scrolling div
	const setBodyHeight = () => {
		document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height + 200}px`;
		console.log(document.body.style.height);
	};

	return (
		<div ref={app} className="App">
			<Header />
			<div ref={scrollContainer} className="scroll">
				<Home />
				<About />
				<p className="text-white">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolor natus voluptatem vero
					delectus aliquid provident alias ipsam a quidem, magni perferendis beatae, dolorum recusandae. Cum
					nemo facilis quas minus consequuntur recusandae architecto, qui amet dolorem expedita reiciendis a
					cumque soluta laboriosam sed? Est atque ipsa esse omnis tenetur autem, labore voluptates laudantium
					obcaecati ducimus perspiciatis beatae cupiditate vel accusantium, quia veritatis totam quidem
					sapiente impedit aliquam quaerat officia! Temporibus aut ipsam amet nostrum veniam dignissimos
					commodi, voluptatibus similique, minus quod cumque? Neque laudantium laboriosam fugiat commodi
					deleniti corporis nesciunt, culpa, modi iste inventore dolor quae est perspiciatis nam natus odit
					enim autem earum amet omnis ab libero labore. Amet repellendus, ad veritatis molestias a quod
					recusandae harum nostrum esse sit laudantium dicta quas eaque, adipisci perspiciatis error iusto
					repudiandae ut, distinctio corporis! Aperiam architecto delectus iste a repudiandae quod beatae
					praesentium at eveniet voluptatem voluptas ea nam veniam libero, maiores neque voluptate quia
					consectetur ad sit eius tempore iusto reprehenderit pariatur. Ullam enim eaque incidunt, quam nulla
					soluta ipsum repellat consectetur officiis vitae earum pariatur quasi. Quidem optio fugiat nam
					officiis nobis repellat cupiditate odit, dolores consequuntur, doloremque ipsum fugit libero,
					necessitatibus voluptatum quae. Nostrum, molestiae fuga! Voluptatum voluptatem quisquam aliquam
					quaerat totam, iste error aperiam aliquid laborum et distinctio necessitatibus accusamus, quos
					adipisci consectetur suscipit amet, animi facere maiores sed inventore obcaecati! Dignissimos
					perspiciatis ipsam quam nulla doloremque expedita. A magni eligendi optio quas delectus deserunt,
					quia laboriosam obcaecati dignissimos laborum ea porro! Id numquam ipsum labore vero repudiandae
					illum optio inventore perspiciatis sint at, temporibus porro omnis ab vel, dolorem sequi dicta
					libero dignissimos ullam error corrupti unde consequuntur adipisci. Reprehenderit dolor obcaecati
					voluptate corrupti perferendis tempore dignissimos itaque ipsum, ratione corporis fuga, explicabo
					quam aperiam blanditiis totam consequatur eveniet deserunt beatae quasi quisquam error similique nam
					culpa voluptas. Sunt, commodi qui. Maxime quos non eligendi quaerat est, ea aspernatur rem quae
					inventore fugiat nulla culpa cumque neque quam nam. Doloribus quibusdam exercitationem nulla amet
					molestias, quod cum itaque sit consequatur dolorum nisi est esse ullam possimus consectetur! Beatae
					iure veniam ipsam odio ut harum sit ad illum? Ea repudiandae quis quae excepturi eum quam magni
					earum nam doloremque tempora asperiores deserunt corporis corrupti, optio adipisci illum nihil
					accusantium provident sequi unde. Dicta, ea expedita repellendus distinctio ut deleniti optio
					repudiandae praesentium maxime officia doloremque eaque veritatis quas neque at dolorum sint
					reprehenderit iusto porro obcaecati perspiciatis, sed sunt? Inventore reprehenderit laborum
					accusamus sint quam aliquid rem harum, modi blanditiis in explicabo asperiores magnam quis debitis
					est similique dolorem dolores! Obcaecati harum tenetur rem optio beatae iste, necessitatibus
					voluptas natus nostrum asperiores nobis sapiente quisquam ex laudantium magni ducimus dolores saepe
					incidunt labore. Assumenda inventore beatae cupiditate officia deserunt quas amet, nulla porro
					perspiciatis praesentium dolorem minima voluptatem perferendis vero, blanditiis iusto nihil
					architecto sint laborum fugiat, dicta aperiam explicabo fuga? Vero illum, nihil inventore quia
					necessitatibus repellat dolorem est voluptate fugit dignissimos dicta minus nisi voluptatem, quaerat
					nesciunt voluptas corrupti ea modi amet? Rerum perspiciatis commodi nihil, minima eius fugiat omnis
					quos, voluptas fugit, impedit nobis autem. Incidunt in asperiores accusamus ipsa unde sequi, minima
					sapiente quis aliquid sunt error necessitatibus voluptatum quaerat natus, quos, suscipit architecto
					corporis! Fugit iure laborum eum voluptate eius dolorem non a, praesentium, odit dolorum laboriosam
					voluptatum inventore eveniet! Ut dolore, deleniti minus corrupti obcaecati consequatur. Porro
					tempore accusamus officiis, molestiae neque eum vero corrupti sapiente, doloribus reiciendis omnis
					deleniti mollitia nam minima consequatur, tenetur hic. Ea, sequi? Dolores veritatis voluptatem
					asperiores nemo ad possimus ea incidunt assumenda. Temporibus vero repudiandae et quasi,
					perspiciatis amet id doloremque esse nostrum sed reprehenderit a nam blanditiis unde incidunt,
					recusandae eligendi tempora? Dignissimos repellendus necessitatibus, consectetur doloribus deleniti
					sint voluptate illum quidem, magni commodi nobis ratione, blanditiis inventore numquam. Ullam, dicta
					eaque mollitia voluptatem nemo quod! Ullam dolore tempora animi quas quae et aut, a beatae amet
					minima eligendi laudantium provident consectetur id expedita earum unde magnam voluptatum officiis
					aliquam similique, quidem maiores rerum? Neque sequi mollitia, fuga enim error est libero
					repellendus minus exercitationem odit laudantium quia vel aspernatur officia corrupti? Amet ut
					accusantium alias, fugiat maiores nemo aliquid praesentium corporis placeat excepturi pariatur iste
					harum minima, omnis explicabo ab illo illum dolore ducimus natus animi, laudantium nihil! Sapiente
					dolore dignissimos nemo facilis nobis fuga, deserunt tempora esse impedit in odit? Sapiente
					doloremque esse ipsa voluptates nobis optio harum repudiandae reprehenderit assumenda aliquid
					architecto sed cupiditate fugiat ea est corporis alias deleniti, in eveniet? Id tenetur aperiam ab
					rem itaque? Voluptatibus, nisi velit ex assumenda earum fugit, cum delectus dolorem, ipsa saepe
					architecto! Eveniet unde asperiores necessitatibus suscipit quam. Doloremque architecto expedita
					delectus provident recusandae ullam doloribus molestiae vero! Laboriosam consequuntur voluptates,
					magnam asperiores voluptas quas velit perferendis consequatur ut cumque nobis adipisci quisquam
					dolore autem libero quo molestiae nihil, obcaecati porro facere quasi minima nam harum rem? Fuga quo
					provident non odit placeat reiciendis possimus ullam facilis! Error, eos fuga libero reiciendis
					porro quis explicabo, consectetur suscipit totam excepturi necessitatibus alias et temporibus
					incidunt doloremque esse eveniet. Eum aliquam ut odio reprehenderit, itaque atque voluptate fuga!
					Quo repellendus quis, ut laudantium voluptas aliquid soluta? Dolorum id omnis harum dolore quos
					distinctio beatae? Voluptatem debitis sunt sed? Corrupti, laboriosam. Impedit doloribus distinctio
					fugiat porro minus pariatur veritatis quibusdam recusandae accusamus. Tenetur optio cupiditate, nisi
					non, debitis ipsam error quibusdam libero iusto, sint sunt vel! Libero commodi dignissimos sed
					veniam eaque, facere amet, maiores possimus id quidem corrupti repellat temporibus dolorum quibusdam
					aliquam. Sunt ex excepturi repudiandae ullam corrupti totam asperiores eius similique quo numquam
					pariatur aliquam, aut natus sapiente veritatis ipsum quae aperiam maiores, illum voluptas velit
					architecto. Distinctio vel maxime nam voluptatibus numquam at quasi cum, ut nobis, eos cumque. Enim
					soluta accusantium quia dignissimos omnis quaerat culpa quo provident sunt. Voluptas impedit dolorem
					repudiandae ipsum reprehenderit, excepturi repellat magnam atque aliquam pariatur! Fugit possimus
					vitae sequi optio! Vero, quo voluptas facere dolores officia eligendi ratione architecto sed nihil.
					Perspiciatis ullam maiores voluptas magnam tempore saepe commodi dignissimos itaque cum rerum sint
					fugit aliquid dolorem dolore enim quo unde harum earum, natus iste. Eveniet unde quibusdam
					laboriosam, atque, voluptates id quia perspiciatis minus quaerat inventore minima ab ullam
					asperiores autem sapiente facere? Vel, consequatur. Iste dolorem ratione fugiat consequatur eos
					placeat iusto. Cumque similique hic quaerat veniam cupiditate esse alias impedit ea deserunt beatae
					nostrum aliquid officia harum quos, voluptas ratione odio sint necessitatibus corrupti earum
					voluptates! Aspernatur, quia debitis deserunt velit, enim harum numquam excepturi et quo in,
					perferendis optio corporis assumenda fuga. Optio accusamus repudiandae tempore eligendi earum. Ipsa
					minima officia pariatur numquam in vero laborum asperiores necessitatibus illum deserunt, harum
					possimus adipisci laudantium nisi ratione aspernatur voluptates! Tempora quasi labore non
					accusantium praesentium sed itaque sapiente, pariatur dolores. Ipsam porro aliquid illo possimus
					corporis labore optio recusandae perferendis unde ipsa sed aperiam ab saepe asperiores consectetur,
					dolore, non perspiciatis culpa quas praesentium deleniti enim! Unde cum vel exercitationem cumque
					eum illum natus maiores optio omnis, soluta distinctio ex repellendus dicta quaerat dignissimos
					commodi in facilis ipsa, quisquam modi sunt iste doloribus aut? Explicabo amet ea saepe nulla
					dolorem error voluptatum, aperiam tempora maxime consectetur voluptate ipsam veniam rem nemo
					repellendus autem commodi cumque. Dolor, perspiciatis? Consectetur autem, dolore vero facilis sunt
					error iusto, quasi quod accusantium repellendus, inventore officia repudiandae id! Recusandae
					voluptate error facere necessitatibus nisi, deleniti maiores illum aut at rem vitae nobis
					repudiandae nihil veritatis voluptates in possimus provident culpa? Voluptatum ex odio quis labore.
					Maxime quidem facilis nemo deleniti eius ea magnam. Modi impedit deleniti nihil ipsum porro, omnis
					voluptate quibusdam. Possimus nesciunt accusamus, quia autem minima, iure magni impedit numquam eius
					blanditiis ipsa ipsum nam, vero qui esse facilis. Ea, animi iure nam deserunt dolorem harum veniam
					possimus repellendus cumque aut! Nobis, harum! Obcaecati, ipsam ab saepe commodi culpa nemo facere
					earum consequatur recusandae animi ut ipsa cupiditate eos molestiae quia, nam sapiente voluptatibus.
					Maxime fugiat nisi omnis ducimus quam laboriosam? Corrupti illum provident iure consectetur non
					molestias animi optio doloremque culpa sequi, ex in, et, corporis odit deserunt blanditiis
					consequatur quos atque aperiam eos? Aliquam necessitatibus illum nisi delectus corporis deleniti
					illo dolorem ab. Assumenda optio sequi autem cum laboriosam nihil itaque sit, nam vel dolor illum
					amet, magnam id pariatur totam beatae voluptates perferendis mollitia ut. Delectus porro, alias quam
					tempora architecto omnis praesentium mollitia quis, inventore, voluptas natus necessitatibus sunt
					deserunt labore quaerat! Labore quisquam aspernatur quis, unde similique architecto vitae nesciunt a
					illum corporis incidunt ducimus voluptates veritatis. Impedit temporibus laborum quas possimus
					deserunt. Aliquam soluta ea deleniti laboriosam accusamus ipsam. Reiciendis, nulla. Nisi sequi
					pariatur repudiandae. Earum consequatur optio non explicabo maiores? Ratione, aspernatur
					accusantium. Optio illo, neque deserunt excepturi dolorem natus nisi, ut ex quis pariatur, tempore
					totam nam tempora laboriosam accusantium voluptatibus quasi non numquam! Incidunt suscipit iste
					recusandae placeat dolorum, consectetur aliquid enim voluptatum reiciendis! Nemo, mollitia assumenda
					quas minima illum modi error quis maxime saepe iusto maiores et sed perspiciatis adipisci odit,
					suscipit aliquam unde! Cumque neque, porro aliquid, in deleniti modi consequatur repellat maxime,
					alias corporis dicta? Minus natus nemo praesentium nihil qui corrupti architecto officia eius?
					Assumenda vel autem, aliquam nisi sapiente accusamus eius labore architecto unde, neque perspiciatis
					aperiam libero ratione, laboriosam quis saepe? Nobis ut sequi a voluptatum nostrum facilis
					laboriosam sed! Eaque numquam asperiores vitae consequatur? Fuga similique tempore possimus dolorem.
					Porro atque commodi delectus molestias nihil est doloribus accusantium, eveniet ea similique tempore
					officia laboriosam minima impedit sequi voluptates a veniam. Quo nulla fugit eveniet rerum
					repudiandae maxime magni id accusantium delectus perferendis non ipsam aliquam ratione eius
					expedita, quas quae nihil quidem culpa. Illum culpa dignissimos animi eveniet cumque eos itaque sit
					odio officia quisquam rem blanditiis, expedita inventore suscipit quia fugiat quidem unde nam non.
					In molestiae iste vero quod sequi nobis, laborum iusto error inventore ea eos culpa, ipsa
					exercitationem modi? Voluptate, iusto qui dolorum, optio quibusdam omnis eum architecto eaque
					aspernatur nostrum amet tempora quisquam maxime numquam velit saepe sapiente beatae ipsam adipisci
					obcaecati, rem aut nam. Dolor nesciunt ullam voluptatibus corporis eum inventore ipsam praesentium
					reiciendis necessitatibus aperiam harum, dolores illum placeat nisi perferendis explicabo quae cum
					labore tempora, natus magnam nostrum cupiditate enim. Natus minus ut quae ipsam explicabo, iste fuga
					reprehenderit itaque praesentium temporibus dicta odio dolorem ea consectetur exercitationem
					voluptatum nostrum, aut adipisci amet! Quasi sequi nobis obcaecati laborum, vero, totam repellendus
					molestias soluta reiciendis, nostrum quisquam voluptatibus magnam optio officia nesciunt. Ipsa,
					magnam? Dolores tenetur natus iure qui quod consectetur sequi, placeat reprehenderit fuga aperiam
					alias cum quas soluta autem nobis dolor dolore nihil magni minima non mollitia pariatur! Recusandae
					provident, aliquam quo voluptatum sunt mollitia eum adipisci. Accusamus cum tenetur optio rerum
					cumque? Atque possimus quae voluptatem nulla doloremque ipsa odit, ullam inventore perferendis
					culpa. Ipsum aperiam minus autem et dolorem, amet, sit delectus iusto pariatur cum perferendis.
					Quasi velit natus, ut sit maxime quidem magni rerum sequi? Nihil expedita, minima quisquam ex ut,
					impedit iure autem recusandae nobis molestiae perferendis possimus omnis, adipisci ullam accusamus
					obcaecati? Blanditiis, odio. Facilis eaque neque, voluptatibus ut nemo, perspiciatis nam repudiandae
					maiores rerum perferendis iusto facere. Vitae minus cum in expedita, nostrum similique! Suscipit sit
					itaque repudiandae alias fugiat quis delectus quidem. Exercitationem deserunt fuga delectus magnam
					similique voluptate porro facilis non maiores, dicta id dolorem eligendi distinctio quas ipsa
					dolores numquam reprehenderit natus aliquam aperiam laboriosam! Recusandae necessitatibus sequi sunt
					nihil est nisi pariatur quibusdam enim, voluptatem eveniet cumque dicta odio earum accusamus vel
					libero labore vitae aliquid maxime corporis non molestiae tempore sed quos. Amet quidem sint quod
					nulla, itaque tenetur labore obcaecati in repudiandae provident voluptate architecto illum ducimus
					qui fugit, veniam perspiciatis. Beatae atque omnis dolorem odit totam perferendis quaerat similique
					possimus, labore dolore provident mollitia accusantium deleniti id nisi neque ut, praesentium
					voluptatum earum aut eligendi distinctio? Nobis vero error a nulla, fugiat laudantium commodi quas
					ipsam veniam facilis itaque sit fugit ipsa, incidunt quisquam obcaecati dolorum debitis! Harum,
					commodi quia. Eaque molestias, maiores hic explicabo repellat nam harum accusantium, dolore quaerat
					veritatis voluptates vel, amet dignissimos?
				</p>
			</div>
		</div>
	);
}

export default App;
