<template>
  <div class="hello">
    <button v-on:click="deleteRow()">{{buttonText}}</button>
    <SvelteTable></SvelteTable>
    <h1>{{ msg }}</h1>
    <table>
      <tbody>
        <tr v-for="row in rows" v-bind:key="row">
          <td>{{row.id}}</td>
          <td>{{row.first_name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  
  //引用svelte组件
  let SvelteTable=require("svelte-table/dist/cjs/SvelteTable");

  let rows = [
    { id: 1, first_name: "Marilyn", last_name: "Monroe", gender: "female" },
    { id: 2, first_name: "Abraham", last_name: "Lincoln", gender: "male" },
    { id: 3, first_name: "Mother", last_name: "Teresa", gender: "female" },
    { id: 4, first_name: "John F.", last_name: "Kennedy", gender: "male" },
    { id: 5, first_name: "Martin Luther", last_name: "King", gender: "male" },
    { id: 6, first_name: "Nelson", last_name: "Mandela", gender: "male" },
    { id: 7, first_name: "Winston", last_name: "Churchill", gender: "male" },
    { id: 8, first_name: "George", last_name: "Soros", gender: "male" },
    { id: 9, first_name: "Bill", last_name: "Gates", gender: "male" },
    { id: 10, first_name: "Muhammad", last_name: "Ali", gender: "male" },
    { id: 11, first_name: "Mahatma", last_name: "Gandhi", gender: "male" },
    { id: 12, first_name: "Margaret", last_name: "Thatcher", gender: "female" },
    { id: 13, first_name: "Christopher", last_name: "Columbus", gender: "male" },
    { id: 14, first_name: "Charles", last_name: "Darwin", gender: "male" },
    { id: 15, first_name: "Elvis", last_name: "Presley", gender: "male" },
    { id: 16, first_name: "Albert", last_name: "Einstein", gender: "male" },
    { id: 17, first_name: "Paul", last_name: "McCartney", gender: "male" },
    { id: 18, first_name: "Queen", last_name: "Victoria", gender: "female" },
    { id: 19, first_name: "Pope", last_name: "Francis", gender: "male" }];
  
  // define column configs
  const columns = [
    {
      key: "id",
      title: "ID",
      value: v => v.id,
      sortable: true,
      filterOptions: rows => {
        // generate groupings of 0-10, 10-20 etc...
        let nums = {};
        rows.forEach(row => {
          let num = Math.floor(row.id / 10);
          if (nums[num] === undefined)
            nums[num] = { name: `${num * 10} to ${(num + 1) * 10}`, value: num };
        });
        // fix order
        nums = Object.entries(nums)
            .sort()
            .reduce((o, [k, v]) => ((o[k] = v), o), {});
        return Object.values(nums);
      },
      filterValue: v => Math.floor(v.id / 10),
      headerClass: "text-left"
    },
    {
      key: "first_name",
      title: "FIRST_NAME",
      value: v => v.first_name,
      sortable: true,
      filterOptions: rows => {
        // use first letter of first_name to generate filter
        let letrs = {};
        rows.forEach(row => {
          let letr = row.first_name.charAt(0);
          if (letrs[letr] === undefined)
            letrs[letr] = {
              name: `${letr.toUpperCase()}`,
              value: letr.toLowerCase()
            };
        });
        // fix order
        letrs = Object.entries(letrs)
            .sort()
            .reduce((o, [k, v]) => ((o[k] = v), o), {});
        return Object.values(letrs);
      },
      filterValue: v => v.first_name.charAt(0).toLowerCase()
    },
    {
      key: "last_name",
      title: "LAST_NAME",
      value: v => v.last_name,
      sortable: true,
      filterOptions: rows => {
        // use first letter of last_name to generate filter
        let letrs = {};
        rows.forEach(row => {
          let letr = row.last_name.charAt(0);
          if (letrs[letr] === undefined)
            letrs[letr] = {
              name: `${letr.toUpperCase()}`,
              value: letr.toLowerCase()
            };
        });
        // fix order
        letrs = Object.entries(letrs)
            .sort()
            .reduce((o, [k, v]) => ((o[k] = v), o), {});
        return Object.values(letrs);
      },
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "gender",
      title: "GENDER",
      value: v => v.gender,
      renderValue: v => v.gender.charAt(0).toUpperCase() + v.gender.substring(1), // capitalize
      sortable: true,
      filterOptions: ["male", "female"] // provide array
    }
  ];
  
  //仅初始化,不渲染
  let svelteTable=new SvelteTable({
    // target: document.getElementById('HelloWorld'),
    props:{
      columns,
      rows:[], //加载空
      classNameTable:"aaa"
    }
  })
  
  export default {
    name: 'HelloWorld',
    components: {
      SvelteTable: svelteTable
    },
    data(){
      return {
        buttonText:"删除",
        columns, 
        rows
      };
    },
    props: {
      msg: String 
    },
    methods:{
      deleteRow() {
        this.rows.pop();//$$,$$set,__props,__emits
        let {update} = svelteTable.$$; //ctx,props,update
        // // // props.rows=this.rows;
        update(); //更新svelte组件
        // alert(rows.length+' '+Object.keys(svelteTable.$$))
      }
    },
    mounted: function () { //vue组件渲染挂载后,需要重装加载svelte组件
      // alert(this.$el.id);
      //重新加载
      svelteTable = new SvelteTable({
        target: this.$el,
        props: {
          columns,
          rows,
          classNameTable: "aaa"
        }
      })
      // alert("mounted"+Object.keys(svelteTable))
      // let ele=document.querySelector('body > table');
      // if (ele){
      //   ele.style.visibility="visible";
      //   let home=document.getElementById('home')
      //   if (home){
      //     home.appendChild(ele)
      //   }
      // }
      // alert("mounted")
    },
    beforeUnmount:()=>{
      // alert("beforeUnmount"+Object.keys(svelteTable))
      // let fnStr=`
      //   alert("beforeUnmount2")
      //   let ele=document.querySelector('#home > table');
      //   // alert('ele'+ele)
      //   if (ele){
      //     ele.style.visibility="hidden";//style.visibility="hidden";
      //       // alert('appendBody');
      //       document.body.appendChild(ele)
      //   }
      // `;
      // eval(fnStr);

    }
  }
</script>

<style>
  .aaa {
    /*width: 600px;*/
    border-collapse: collapse;
    /*border: #ff3e00 1px solid;*/
  }
  .aaa th{
    /*width: 600px;*/
    /*border-collapse: collapse;*/
    border: #ff3e00 1px solid;
  }
  .aaa td{
    /*width: 600px;*/
    /*border-collapse: collapse;*/
    border: #ff3e00 1px solid;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
