import VueRouter from 'vue-router';
import BoardIndex from './../components/board/BoardIndex.vue';
import BoardCreate from './../components/board/BoardCreate.vue';
import BoardEdit from './../components/board/BoardEdit.vue';

const routes = [
    {
        path: '/',
        components: {
            boardIndex: BoardIndex
        }
    },
    {
        path: '/ticketing/boards/create',
        components: {
            createBoard: BoardCreate
        },
        name: 'createBoard'
    },
    {
        path: '/ticketing/boards/edit/:id',
        components: {
            editBoard: BoardEdit
        },
        name: 'editBoard'
    },
];

export default new VueRouter({routes});
