import { MemoryCardComponent } from './examples/memory/memory-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SectionsComponent } from './sections/sections.component';
import { ProfilepageComponent } from './examples/profilepage/profilepage.component';
import { RegisterpageComponent } from './examples/registerpage/registerpage.component';
import { PricingComponent } from './examples/pricing/pricing.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ResetpageComponent } from './examples/resetpage/resetpage.component';

const routes: Routes = [
	{ path: '', redirectTo: 'memory', pathMatch: 'full' },
	{ path: '*', redirectTo: 'memory', pathMatch: 'full' },
	{ path: 'components', component: IndexComponent },
	{ path: 'presentation', component: PresentationComponent },
	{ path: 'sections', component: SectionsComponent },
	{ path: 'profile', component: ProfilepageComponent },
	{ path: 'register', component: RegisterpageComponent },
	{ path: 'pricing', component: PricingComponent },
	{ path: 'product', component: ProductpageComponent },
	{ path: 'reset', component: ResetpageComponent },
	{ path: 'memory', component: MemoryCardComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: true,
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
			scrollOffset: [0, 64]
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
