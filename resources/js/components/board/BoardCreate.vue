<template>
    <div>
        <div class="panel panel-default">
            <div class="form-group">
                <router-link to="/" class="back-btn btn btn-danger">Back</router-link>
                <div class="panel-heading">Create New Board</div>
            </div>
            <div class="panel-body">
                <form v-on:submit="saveForm()">
                    <div class="row col-md-12">
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
                        <div class="col-md-12 form-group">
                            <button class="btn btn-success">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BoardCreate",
        data: function () {
            return {
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
                axios.post('/api/ticketing/boards', newBoard)
                    .then(function (resp) {
                        app.$router.push({path: '/'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your board");
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
