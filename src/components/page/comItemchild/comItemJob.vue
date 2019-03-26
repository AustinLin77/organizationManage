<template>
    <div class="personManage">

        <el-button type="primary" @click="bgshow = true">添加岗位</el-button>
        <div style="height: 20px"></div>
        <el-table
            :data="tableData"
            style="width: 100%"
        >
            <el-table-column
                prop="jName"
                label="岗位名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="jLevel"
                label="岗位层级"
                width="180">
            </el-table-column>
            <el-table-column
                prop="jArea"
                label="岗位区域">
            </el-table-column>
            <el-table-column
                prop="isDelete"
                label="是否删除">
            </el-table-column>
            <el-table-column
                prop="jCreateDateStr"
                label="新增时间">
            </el-table-column>
            <el-table-column
                prop="jUserNo"
                label="新增人">
            </el-table-column>
            <el-table-column
                prop="jMessage"
                label="岗位职责">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="150">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text">修改</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="bgedit" v-show="bgshow">
            <div class="bgcontent">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="岗位名称">
                        <el-input v-model="form.jName"></el-input>
                    </el-form-item>
                    <el-form-item label="岗位层级">
                        <el-input v-model="form.jLevel" min="1" type="number" placeholder="数值越小显示越靠前"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="上级岗位编号">-->
                        <!--<el-input v-model="form.pJId"></el-input>-->
                    <!--</el-form-item>-->
                    <el-form-item label="岗位区域">
                        <el-input v-model="form.jArea"></el-input>
                    </el-form-item>
                    <el-form-item label="岗位职责">
                        <el-input v-model="form.jMessage"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确认新增</el-button>
                        <el-button @click="bgshow = false">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data: function(){
            return {
                selpram:{},
                bgshow:false,
                tableData:[],
                personMess:{},
                form:{
//                    jUserNo:"",
                    jName:"",
                    jLevel:1,
                    pJId:-1,
                    jArea:"",
                    jMessage:""

                }

            }
        },

        created:function () {
            this.cid = this.$route.query.communityId;
            this.getJobList();
        },



        methods:{
            setmanag:function (item) {
                console.log(item);
            },

            handleClick(item){
                console.log(item);
                let vm = this;
                $.ajax({
                    url: vm.url+"community/findCMUserByUserNo.json",
                    dataType: "json",
                    data: {
                        cUserNo:item.userNo,
                        uId:item.uId
                    } ,
                    type: "get",
                    success: function(data) {
                        console.log(data);
                        vm.$message(data.message);
                        if(data.statusCode===0){
                            vm.bgshow = true;
                            vm.form = data.dataInfo.listData[0];
                            vm.form.cmFile.fUrl = 'http://appinter.sunwoda.com'+ vm.form.cmFile.fUrl;
                            vm.form.cPhotoFile.fUrl = 'http://appinter.sunwoda.com'+ vm.form.cPhotoFile.fUrl;
                            vm.form.file=[];
                            vm.form.photo=[];
                        }
                    },
                    error: function() {
                        vm.$message("维护中。。。");
                        vm.refreshing = false;
                    }
                });
            },
            getJobList:function () {
                let vm = this;
                vm.selpram.cId = vm.cid;
                $.ajax({
                    url: vm.url+"community/findCMJob.json",
                    dataType: "json",
                    data: vm.selpram ,
                    type: "get",
                    success: function(data) {
                        console.log(data);
                        vm.$message(data.message);
                        if(data.statusCode===0){
                            vm.tableData = data.dataInfo.listData
                        }
                    },
                    error: function() {
                        vm.$message("维护中。。。");
                        vm.refreshing = false;
                    }
                });
            },
            getSapmess:function () {
                let vm = this;
                $.ajax({
                    url: vm.url+"community/findUserJobByCId.json",
                    dataType: "json",
                    data: vm.form.cUserNo ,
                    type: "get",
                    success: function(data) {
                        console.log(data);

                        if(data.statusCode===0){

                        }
                    },
                    error: function() {
                        vm.$message("维护中。。。");
                        vm.refreshing = false;
                    }
                });
            },
            onSubmit:function () {
                let vm = this;
                vm.form.cId = vm.cid;
                vm.form.jUserNo = JSON.parse(localStorage.getItem("comloginUserMess")).userNo;

                $.ajax({
                    url: vm.url+"community/insertCMJob.json",
                    dataType: "json",
                    data: vm.form ,
                    type: "get",
                    success: function(data) {
                        console.log(data);
                        vm.$message(data.message);
                        if(data.statusCode===0){
                            vm.bgshow = false;
                            vm.getJobList();
                        }
                    },
                    error: function() {
                        vm.$message("维护中。。。");
                        vm.refreshing = false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .photo{
        width: 60px;
        height: 60px;
        border: solid 1px #e4e4e4;
        border-radius: 5px;
        position: relative;
    }
    .imginput{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    .personManage{
        padding: 20px;
    }
    .bgedit{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,.5);
        overflow-y: scroll;
        z-index: 999;
    }

    .bgcontent{
        width: 600px;
        min-height: 50%;
        max-height: 90%;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        overflow-y: scroll;
    }
</style>
