package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

    List<String> infos =  new ArrayList<>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    response.getWriter().println("<h1>LOG INFO</h1>");
    response.getWriter().println("<div id=\"info-list\"></div>");
    response.getWriter().println("<ul>");
    for (String info : infos) {
      response.getWriter().println("<li>" + info + "</li>");
    }

    response.getWriter().println("</ul>");
    response.getWriter().println("<br>Click <a href=\"https://naguirre-sps-summer22.appspot.com\">here</a> to return to main page.");
  }



  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String name = request.getParameter("name");
    String message = request.getParameter("message");

    infos.add(name + ": " +message);

    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Info");
    FullEntity taskEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("Name", name)
            .set("Message", message)
            .build();
    datastore.put(taskEntity);

    // Print the value so you can see it in the server logs.
    System.out.println(name+" Submitted: " + message);
    // Write the value to the response so the user can see it.
    response.getWriter().println(name+" Submitted: " + message);
    //response.getWriter().println("<br>Click <a href=\"https://naguirre-sps-summer22.appspot.com/form-handler\">here</a> to see everybody's messages.");
    response.getWriter().println("<br>Click <a href=\"https://naguirre-sps-summer22.appspot.com/#servlet\">here</a> to enter another message.");
    
    response.sendRedirect("https://naguirre-sps-summer22.appspot.com");
  }
}

