<template>
    <div class="github-repo">
        <transition name="fade" mode="out-in">
            <div v-if="loadingRepo && !repo" key="loading">
                Loading Repository
            </div>
            <div v-else-if="repo" key="repo">
                <div v-for="(r, index) in repo" :key="index">
                    <div class="repo">
                        <a :href="r.html_url" target="_blank"><h4>{{r.name}}</h4></a>
                        <p>{{ (r.description != undefined && r.description.length > 80 ? r.description.substr(0, 78)+'...': r.description)  || "No Description" }}</p>
                        <div class="label">
                            <span>{{r.language || 'N/A' }}</span>
                        </div>
                        <div class="bottom">
                            <p class="yes">{{r.full_name}}</p>
                        </div>
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
    padding: 20px 0px;
    padding-top: 10px;
    background: #fff;
    
    .repo {
        border: 1px solid lightgray;
        border-radius: 10px;
        width: 31%;
        margin: 1.0025%;
        float: left;
        height: 220px;
        overflow: hidden;
        position: relative;

        a {
            text-decoration: none;
            color: #2c3e50;
            padding: 10px;
            padding-top: 15px;

            h4 {
                padding: 10px;
                font-size: 17px;
                margin-bottom: 0;
                word-wrap: break-word;
            }
        }

        .label{
            position: absolute;
            top:0px;
            // padding: 0px 10px;

            span{
                font-size: 11px;
                font-weight: bold;
                background: yellow;
                padding: 5px;
                border-top-left-radius: 5px;
            }
        }

        p {
            font-size: 12px;
            text-align: center;
        }

        strong {
            font-size: 15px;
        }

        .bottom{
            position: absolute;
            bottom: 0;
            text-align: center;
            width: 100%;
            border-top: 1px solid lightgray;

            .yes {
                text-align: center;
                font-size: 9px;
                padding: 0px;
            }
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
