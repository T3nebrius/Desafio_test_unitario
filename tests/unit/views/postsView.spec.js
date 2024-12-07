import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import PostsView from '@/views/PostsView.vue'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

describe('PostsView', () => { 
    test('Probando la existencia del componente o vista PostsView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/posts',
                name: 'PostsViewVue',
                component: PostsView
            }],
        })
        router.push('/posts')
        await router.isReady()

        const wrapper = mount(PostsView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(PostsView).exists()).toBe(true)
    }) 
    
    test('Crea un snapshot de la estructura HTML del componente AboutView.vue', () => {
        const wrapper = mount(AboutView)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Crea un snapshot de la estructura HTML del componente HomeView.vue', () => {
        const wrapper = mount(HomeView)
        expect(wrapper.html()).toMatchSnapshot()
    })
 })