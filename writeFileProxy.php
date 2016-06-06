<?php 
    ini_set('max_execution_time', 300);
    $server = "http://10.0.1.214/acl/services/call_service?";
    $user = "APPUSERCREDENTIAL=".$_GET['APPUSERCREDENTIAL'];
    $isreport = "&IS_REPORT=".$_GET['IS_REPORT'];
    $report = "&REPORT=".urlencode($_GET['REPORT']);
    $metasys = "&meta_system=".$_GET['meta_system'];
    $metapro = "&meta_procedure=".$_GET['meta_procedure'];
    $metaout = (isset($_GET['meta_outparams'])) ? "&meta_outparams=".$_GET['meta_outparams'] : "&meta_outparams=result";
    $format = "&FORMAT=".$_GET['FORMAT'];
    
    $turnpikeid = (isset($_GET['TURNPIKEID'])) ? "&TURNPIKEID=".$_GET['TURNPIKEID'] : "";
    $turnpikename = (isset($_GET['TURNPIKENAME'])) ? "&TURNPIKENAME=".urlencode($_GET['TURNPIKENAME']) : "";
    $plazaid = (isset($_GET['PLAZAID'])) ? "&PLAZAID=".$_GET['PLAZAID'] : "";
    $plazaname = (isset($_GET['PLAZANAME'])) ? "&PLAZANAME=".urlencode($_GET['PLAZANAME']) : "";
    $lanenum = (isset($_GET['LANENUM'])) ? "&LANENUM=".$_GET['LANENUM'] : "";
    $period = (isset($_GET['PERIODTYPE'])) ? "&PERIODTYPE=".$_GET['PERIODTYPE'] : "";
    $orgid = (isset($_GET['ORGID'])) ? "&ORGID=".$_GET['ORGID'] : "";
    $orgname = (isset($_GET['ORGNAME'])) ? "&ORGNAME=".urlencode($_GET['ORGNAME']) : "";
    $agency = (isset($_GET['TAGISSUEAGENCYID'])) ? "&TAGISSUEAGENCYID=".$_GET['TAGISSUEAGENCYID'] : "";
    $agencyid = (isset($_GET['AGENCYID'])) ? "&AGENCYID=".$_GET['AGENCYID'] : "";
    $plazatrxid = (isset($_GET['PLAZATRXID'])) ? "&PLAZATRXID=".$_GET['PLAZATRXID'] : "";
    $codeoffname = (isset($_GET['CODEOFFNAME'])) ? "&CODEOFFNAME=".$_GET['CODEOFFNAME'] : "";
    $programname = (isset($_GET['PROGRAMNAME'])) ? "&PROGRAMNAME=".$_GET['PROGRAMNAME'] : "";
    $platestate = (isset($_GET['PLATESTATE'])) ? "&PLATESTATE=".$_GET['PLATESTATE'] : "";
    $platenum = (isset($_GET['PLATENUM'])) ? "&PLATENUM=".$_GET['PLATENUM'] : "";
    $tagid = (isset($_GET['TAGID'])) ? "&TAGID=".$_GET['TAGID'] : "";
    $year = (isset($_GET['YEAR'])) ? "&YEAR=".$_GET['YEAR'] : "";
    $month = (isset($_GET['MONTH'])) ? "&MONTH=".$_GET['MONTH'] : "";
    $startdate = (isset($_GET['STARTDATE'])) ? "&STARTDATE=".$_GET['STARTDATE'] : "";
    $enddate = (isset($_GET['ENDDATE'])) ? "&ENDDATE=".$_GET['ENDDATE'] : "";
    $revdate = (isset($_GET['REVENUEDATE'])) ? "&REVENUEDATE=".$_GET['REVENUEDATE'] : "";
    $starttime = (isset($_GET['STARTTIME'])) ? "&STARTTIME=".$_GET['STARTTIME'] : "";
    $endtime = (isset($_GET['ENDTIME'])) ? "&ENDTIME=".$_GET['ENDTIME'] : "";
    $txntmst = (isset($_GET['TXNTMST'])) ? "&TXNTMST=".urlencode($_GET['TXNTMST']) : "";

    $jsonurl = $server.$user.$isreport.$report.$metasys.$metapro.$metaout.$format.$turnpikeid.$turnpikename.$plazaid.$plazaname.$lanenum.$period.$orgid.$orgname.$agency.$agencyid.$plazatrxid.$codeoffname.$programname.$platestate.$platenum.$tagid.$year.$month.$startdate.$enddate.$revdate.$starttime.$endtime.$txntmst;

    $json = file_get_contents($jsonurl);
    echo $json;

?>