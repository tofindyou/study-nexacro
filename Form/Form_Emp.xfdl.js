(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Tyler</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20060907</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">lightgray</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"POS_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CD\">04</Col><Col id=\"POS_NAME\">Officer</Col></Row><Row><Col id=\"POS_CD\">03</Col><Col id=\"POS_NAME\">Assistant Manager</Col></Row><Row><Col id=\"POS_CD\">02</Col><Col id=\"POS_NAME\">Division Manager</Col></Row><Row><Col id=\"POS_CD\">01</Col><Col id=\"POS_NAME\">Chairman</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","12","10","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Employees");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","14","42","766","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","5","8","81","33",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("Department");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept_cd","95","14","65","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept_nm","165","14","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_dept","293","14","46","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("Find");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","370","11","50","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("Gender");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","430","10","192","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_search_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_gender_innerdataset", obj);
            div_search_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">All</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_gender_innerdataset);
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset","697","13","58","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("reset");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_save","730","6","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","675","6","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","620","6","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve","565","6","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Retrive");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","14","98","384","484",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"DEPT_CD\"/><Cell col=\"4\" text=\"POS_CD\"/><Cell col=\"5\" text=\"HIRE_DATE\"/><Cell col=\"6\" text=\"SALARY\"/><Cell col=\"7\" text=\"GENDER\"/><Cell col=\"8\" text=\"MARRIED\"/><Cell col=\"9\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:MEMO\" displaytype=\"text\" edittype=\"textarea\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"expr:&quot;Total : &quot; + dataset.getRowCount()\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&apos;SALARY&apos;)\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","404","98","376","484",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","6","10","110","31",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_00","6","46","110","31",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_text("Emp ID");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_01","6","84","110","31",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("Department");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_02","6","156","110","31",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("Position");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_03","6","221","110","31",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("Gender");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_04","6","254","110","31",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("Married");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_05","6","294","110","31",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("Hire Date");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_06","6","336","110","31",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("Annual Salary");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_07","6","401","110","31",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("Memo");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","155","13","140","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","156","49","89","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_format("AA-###");
            obj.set_type("string");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","156","88","140","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new ListBox("lst_pos","156","126","180","87",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","156","223","140","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","155","257","24","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","155","297","140","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","156","339","100","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_format("#,###");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","155","378","200","89",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            this.div_detail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,function(p){});
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.edt_name","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.msk_id","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.cbo_dept","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.lst_pos","value","ds_emp","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.cal_date","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.msk_salary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Emp.xfdl", function() {
        // Search Area Dept Popup
        // (부서 검색 화면을 팝업으로 호출 하는 스크립트)
        this.div_search_btn_dept_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);

            var objChild = new ChildFrame("popDept", "absolute", nLeft, nTop, 300, 400);
            objChild.set_formurl("Popup::Pop_DeptSearch.xfdl");
            objChild.set_openalign("center middle");
            objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");
        };

        // Dept Popup Callback
        // (부서 검색 화면에서 리턴값을 받는 스크립트)
        this.fn_callback_pop = function(sPopupId, sReturn)
        {
            if(sReturn == undefined){
                sReturn = "";
            }
            if(sPopupId == "popDept")
            {
                if(sReturn.length > 0){
                    var arrRtn = sReturn.split("|");
                    this.div_search.form.edt_dept_cd.set_value(arrRtn[0]);
                    this.div_search.form.edt_dept_nm.set_value(arrRtn[1]);
                }
            }
        }



        // 성별에 따라서 조회 데이터를 필터 처리하는 스크립트
        this.div_search_rdo_gender_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "A")
            {
                this.ds_emp.filter("");
            }
            else
            {
                this.ds_emp.filter("GENDER == '" + e.postvalue + "'");
            }
        };



        // 조회조건 초기화 reset버튼의 onclick 이벤트
        this.div_search_btn_reset_onclick = function(obj,e)
        {
        	this.div_search.form.edt_dept_cd.set_value("");
            this.div_search.form.edt_dept_nm.set_value("");
            this.div_search.form.rdo_gender.set_value("A");
        };



        // Retrieve 버튼의 onclick 이벤트
        this.fn_retrieve = function(obj,e)
        {
        	this.transaction("svcSelect"
                            ,"SvcURL::select_emp.jsp"
                            ,""
                            ,"ds_emp=out_emp"
                            ,""
                            ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG)
        {
        	if(errCD < 0){
        		this.alert("Error: " + errMSG);
        		return;
        	}

        	if(svcID == "svcSelect"){
        		this.alert("Retrieve Success!!!");
        	}
        }



        // Add 버튼의 onclick 이벤트
        this.fn_add = function(obj,e)
        {
        	// 데이터셋의 마지막 row에 새로운 row를 추가
            this.ds_emp.addRow();

            // 추가한 row의 입사일자 컬럼에 오늘 일자를 초기값으로 설정
            this.ds_emp.setColumn(this.ds_emp.rowposition, "HIRE_DATE", this.fn_today());
        };

        // 자바스크립트를 이용하여 오늘 일자 계산
        this.fn_today = function()
        {
            var objDate = new Date();
            var sToday  = objDate.getFullYear().toString();
                sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
                sToday += objDate.getDate().toString().padLeft(2, "0");

            return sToday;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_search.form.btn_dept.addEventHandler("onclick",this.div_search_btn_dept_onclick,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);
            this.div_search.form.btn_reset.addEventHandler("onclick",this.div_search_btn_reset_onclick,this);
            this.btn_add.addEventHandler("onclick",this.fn_add,this);
            this.btn_retrieve.addEventHandler("onclick",this.fn_retrieve,this);
        };
        this.loadIncludeScript("Form_Emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
