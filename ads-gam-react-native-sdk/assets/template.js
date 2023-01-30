export default `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <base href="/" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    html,
    body {
      margin: 0;
      padding: 0;
    }
  </style>

  <!-- TODO: REPLACE WITH PRODUCTION CDN URL -->
  <script async src="https://storage.googleapis.com/hopprtv_dev_public/sdk/hopprtv.umd.js"></script>

  <script type="text/javascript">
    window.hopprtv = window.hopprtv || { cmd: [] };
  </script>
</head>

<body>
  <div id="%AD_UNIT_ID%"></div>

  <script type="text/javascript">
    const hopprInternalUserId = "%HOPPR_INTERNAL_USER_ID%";
    if (hopprInternalUserId) {
      const hopprId = localStorage.getItem('hopprInternalUserId');

      if (!hopprId) {
        localStorage.setItem('hopprInternalUserId', hopprInternalUserId);
      }
    }

    hopprtv.cmd.push(() => {
      hopprtv.initAnalytics('%APP_ID%', '%API_KEY%', '%USER_ID%');

      hopprtv.ads.advertSlots.push(
        ..."%HOPPR_ADS_OBJECT%"
      );
      hopprtv.ads.isConfigLoaded = true;
      hopprtv.ads.userId = '%USER_ID%';
      const targeting = "%TARGETING_PROPERTIES%";
      const size = "%AD_SIZES%";
      const options = {}

      if (size) {
        options["size"] = size;
      }

      if (targeting) {
        options["targeting"] = targeting;
      }

      hopprtv.ads.display('%AD_UNIT_ID%', options);
    });
  </script>
</body>

</html>
`;
