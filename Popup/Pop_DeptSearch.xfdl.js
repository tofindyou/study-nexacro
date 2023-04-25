(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pop_DeptSearch");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","12","114","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Department Search");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","50","280","300",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_dept");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"197\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Dept Code\"/><Cell col=\"1\" text=\"Dept Name\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","84","358","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("OK");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","160","358","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Pop_DeptSearch.xfdl", function() {
        // 부서 검색 화면에서 리턴 보내주는 스크립트
        this.fn_ok = function()
        {
            var sRtn =  this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CD") + "|";
                sRtn += this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME");
            this.close(sRtn);
        }

        // 부서 검색 화면을 종료하는 스크립트
        this.fn_cancel = function(obj,e)
        {
            this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_list.addEventHandler("oncelldblclick",this.fn_ok,this);
            this.btn_ok.addEventHandler("onclick",this.fn_ok,this);
            this.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
        };
        this.loadIncludeScript("Pop_DeptSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
