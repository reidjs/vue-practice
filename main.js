Vue.component('task', {
    template: '<li><slot></slot></li>'
});
Vue.component('task-list', {
    template: `
        <div>
            <task v-for='task in tasks'>{{ task.task }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                { task: 'Go to store', complete: true },
                { task: 'Go to bank', complete: true },
                { task: 'Go to work', complete: false }
            ]
        };
    }
});


new Vue({
    el: '#root'
})