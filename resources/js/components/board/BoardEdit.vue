<template>
    <div>
        <div class="panel panel-default">
        <div class="form-group">
            <router-link to="/" class="back-btn btn btn-danger">Back</router-link>
            <div class="panel-heading">Edit New Board</div>
        </div>
        <div class="panel-body">
            <form v-on:submit="saveForm()">
                <div class="row">
                    <div class="col-md-6 form-group">
                        <label class="control-label">Board Name</label>
                        <input type="text" v-model="boards.name" class="form-control">
                    </div>
                    <div class="col-md-6 form-group">
                        <label class="control-label">Board Description</label>
                        <input type="text" v-model="boards.description" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 form-group">
                        <button class="btn btn-success">Update</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "BoardEdit",
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.boardId = id;
            axios.get('/api/ticketing/boards/' + id)
                .then(function (resp) {
                    app.boards = resp.data;
                })
                .catch(function () {
                    alert("Could not load your board")
                });
        },
        data: function () {
            return {
                boardId: null,
                boards: {
                    name: '',
                    description: '',
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newBoard = app.boards;
                axios.patch('/api/ticketing/boards/' + app.boardId, newBoard)
                    .then(function (resp) {
                        app.$router.replace('/');
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not edit your board");
                    });
            }
        }
    }
</script>

<style scoped>
    .back-btn {
        float: right;
    }
    .panel-heading {
        font-size: 26px;
    }
</style>
