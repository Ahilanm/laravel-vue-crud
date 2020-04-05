<template>
    <div>
        <div class="panel panel-default">
            <div class="form-group">
                <router-link :to="{name: 'createBoard'}" class="btn btn-success btn-create">Create New Board</router-link>
                <div class="panel-heading">Board list</div>
            </div>
            <div class="panel-body">
                <table class="table table-bordered table-striped col-md-12">
                    <thead>
                    <tr>
                        <th width="10%">Name</th>
                        <th width="10%">Description</th>
                        <th width="10%">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="board, index in boards">
                        <td>{{ board.name }}</td>
                        <td>{{ board.description }}</td>
                        <td>
                            <router-link :to="{name: 'editBoard', params: {id: board.id}}" class="btn btn-xs btn-info">
                                Edit
                            </router-link>
                            <a href="#" class="btn btn-xs btn-danger" v-on:click="deleteEntry(board.id, index)">
                                Delete
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BoardIndex",
        data: function () {
            return {
                boards: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/ticketing/boards')
                .then(function (resp) {
                    app.boards = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load boards");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/ticketing/boards/' + id)
                        .then(function (resp) {
                            app.boards.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete boards");
                        });
                }
            }
        }
    }
</script>

<style scoped>
    .btn-create {
        float: right;
    }
    .panel-heading {
        font-size: 26px;
    }
</style>
