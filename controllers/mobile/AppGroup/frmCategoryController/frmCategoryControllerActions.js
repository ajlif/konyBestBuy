define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonSearch **/
    AS_Button_f00fd3c036884b77a25756b26fa07273: function AS_Button_f00fd3c036884b77a25756b26fa07273(eventobject) {
        var self = this;

        function MOVE_ACTION____f9747be4a02c40a0a8e74d2337607410_Callback() {}
        self.view.searchText.isVisible = true;
        self.view.headerButtonSearch.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "1px",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": MOVE_ACTION____f9747be4a02c40a0a8e74d2337607410_Callback
        });
    },
    /** onDownloadComplete defined for CopyheaderTitleLogo0d03768f9153345 **/
    AS_Image_c26ffb3b3ac74ffeb4304727ebad9d44: function AS_Image_c26ffb3b3ac74ffeb4304727ebad9d44(eventobject, imagesrc, issuccess) {
        var self = this;

        function SCALE_ACTION____i5b40e14cab74e4c910e3d10947442b4_Callback() {}
        self.view.CopyheaderTitleLogo0d03768f9153345.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "width": "75dp",
                "height": "35dp"
            }
        }), {
            "delay": 0.5,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": SCALE_ACTION____i5b40e14cab74e4c910e3d10947442b4_Callback
        });
    },
    /** onClick defined for backButtonText **/
    AS_Button_bc1b73e96f3c44a0a2d4527e28f8edec: function AS_Button_bc1b73e96f3c44a0a2d4527e28f8edec(eventobject) {
        var self = this;
        return self.onBackNavigation.call(this);
    },
    /** onTouchStart defined for backButtonIcon **/
    AS_Label_e61c6904afd545019784d46773b211e8: function AS_Label_e61c6904afd545019784d46773b211e8(eventobject, x, y) {
        var self = this;
        return self.onBackNavigation.call(this);
    },
    /** onRowClick defined for SegmentCategories **/
    AS_Segment_f51123dda12f441ab97a9ae79ac62ad3: function AS_Segment_f51123dda12f441ab97a9ae79ac62ad3(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onRowClick.call(this);
    },
    /** onDone defined for searchText **/
    AS_TextField_a14ad794479f46848d1534bbef55a5d1: function AS_TextField_a14ad794479f46848d1534bbef55a5d1(eventobject, changedtext) {
        var self = this;
        return self.onSearchDone.call(this);
    },
    /** init defined for frmCategory **/
    AS_Form_ae04e4cff3f349149f53509a1b7d584a: function AS_Form_ae04e4cff3f349149f53509a1b7d584a(eventobject) {
        var self = this;
        return self.getCategoriesData.call(this, "cat00000");
    }
});