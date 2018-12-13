<template>
    <div class="github-repo">
        <transition name="fade" mode="out-in">
            <div v-if="loadingRepo && !repo" key="loading">
                Loading Repository
            </div>
            <div v-else-if="repo" key="repo">
                <div v-for="(r, index) in repo" :key="index">
                    <div class="repo">
                        <a :href="r.html_url" target="_blank"><h2>{{r.name}}</h2></a>
                        <h5>{{r.full_name}}</h5>
                        <span>{{r.description || "No Description" }}</span>
                        <strong>{{r.language}}</strong>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "repo",
  computed: mapState(["loadingRepo", "repo"])
}
</script>

<style lang="stylus" scoped>
.github-repo {
    padding-top: 10px;
    padding: 20px;
    background: #fff;

    .repo {
        border: 1px solid lightgray;
        width: 32.5%;
        margin: 0.25%;
        float: left;
        height: 220px;
        overflow: hidden;

        a {
            text-decoration: none;
            color: #2c3e50;

            h2 {
                margin-bottom: 0;
            }
        }

        h5 {
            margin-top: 5px;
        }

        span {
            display: block;
            margin-bottom: 5px;
        }

        strong {
            font-size: 15px;
        }
    }

    @media only screen and (max-width: 768px) {
        .repo {
            width: 49%;
        }
    }

    @media only screen and (max-width: 468px) {
        .repo {
            width: 100%;
            margin-bottom: 15px;
        }
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
