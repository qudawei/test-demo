/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-08-05 17:09:56
 * @LastEditors: David Qu
 * @LastEditTime: 2021-08-05 17:44:39
 */
/*
 * getClientRects()只是支持行内元素，非行内元素不支持该方法
 * unfoldText 展开文本
 * foldText 收起文本
 * unfoldClass 展开类名
 * foldClass 收起类名
 * line 多少行省略
 * color 默认样式颜色
 */

(function ($) {
    $.fn.rectOmitText = function (options) {
      if ($(this).css("display") != "inline") {
        console.warn(
          "该方法不支持非行内（inline）元素展开收起以及省略，！请把对应的元素转为inline元素"
        );
        return false;
      }
  
      var defaluts = {
        unfoldText: "展开",
        foldText: "收起",
        unfoldClass: "",
        foldClass: "",
        line: 1,
        color: "style='color: #2a68c9;'",
      };
      
      var opt = $.extend(defaluts, options);
      var txtHtml = $(this).html(); //所有文本
      var omitHtml = $(this).html(); //省略文本
      var rect = $(this)[0].getClientRects(); //获取元素占据页面的所有矩形区域
      console.log(rect)
      var line = getLineLen(rect); //文本真实的行数
      //展开显示文本
      var unfold = opt.unfoldClass
        ? "<span>... </span><span class='rect-unfold " +
          opt.unfoldClass +
          "'>" +
          opt.unfoldText +
          "</span>"
        : "<span>... </span><span " +
          opt.color +
          " class='rect-unfold " +
          opt.unfoldClass +
          "'>" +
          opt.unfoldText +
          "</span>";
      //收起显示文本
      var fold = opt.foldClass
        ? "<span class='rect-fold " +
          opt.foldClass +
          "'>" +
          opt.foldText +
          "</span>"
        : "<span " +
          opt.color +
          "class='rect-fold " +
          opt.foldClass +
          "'>" +
          opt.foldText +
          "</span>";
  
      if (line && line == 1) {
        console.warn("标签文本内容只有一行，不作省略！");
        return false;
      }
  
      if (opt.line >= line) {
        console.warn("传入的省略行数大于文本行数，不作省略");
        return false;
      }
  
      //行数大于5行，显示... 展开按钮
      while (line > opt.line) {
        var step = 1;
        if (/<br\/>$/.test(omitHtml)) {
          //回退的时候，如果碰到换行要整体替换
          step = 5;
        }
  
        //每次减少文本数组最后以为参数（br标签直接减少整个br标签的长度）
        omitHtml = omitHtml.slice(0, -step);
        txt.innerHTML = omitHtml + unfold;
  
        //更新行数
        line = getLineLen($(this)[0].getClientRects());
        if (omitHtml.length <= 0) {
          //强制停止循环
          break;
        }
      }
  
      //展开点击
      $("#txt").on("click", "span.rect-unfold", function () {
        $("#txt").html(txtHtml + fold);
      });
  
      //收起点击
      $("#txt").on("click", "span.rect-fold", function () {
        $("#txt").html(omitHtml + unfold);
      });
  
      function getLineLen(arr) {
        //获取当前文本真实的行数，如果是<br>符号getClientRects()方法也会变成一个区域
        var line = 0;
        var bottom = 0;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].bottom != bottom) {
            bottom = arr[i].bottom;
            line++;
          }
        }
        console.log('line', line);
        return line;
      }
    };
  })(jQuery);