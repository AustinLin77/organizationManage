<template>
    <div class="login-wrap">
        <div class="ms-title">app管理后台</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 请根据用户名密码进行登录</p>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
//                        $.ajax({
//                            type:"post",
//                            url:self.path+'login.json',
//                            dataType:"json",
//                            data:{
//                                account:self.ruleForm.username,
//                                password:self.ruleForm.password
//                            },
//                            success:function(data){
//                                console.log(data);
//                                self.$message(data.message);
//                                if(data.statusCode == 0){
//
//                                    localStorage.setItem('pdaUserMess',JSON.stringify(data.dataInfo.listData[0]));
//                                    self.$router.push('/community');
//                                }
//                            },
//                            error:function (data) {
//                                self.$message( {type: 'error',data:"请求失败"});
//                            },
//
//                        });
                        localStorage.setItem('comloginUserMess',JSON.stringify({createUser:"123456",department:"信息中心",userNo:"170711125",userName:"wuyi",isFinanceUser:0}));
                        self.$router.push('/community');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background: url("../../assets/bg.jpg");
        background-size: 100% 100%;
    }
    .ms-title{

        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #888;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }

</style>
