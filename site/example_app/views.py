from django.views.generic.base import TemplateView
from django.shortcuts import render
from django.http import HttpResponseRedirect


class ChatterBotAppView(TemplateView):
    template_name = "app.html"

class ee_1_2(TemplateView):
    template_name = "ee_2_3.html"

    def post(self, request, *args, **kwargs):
        form = self.(request.POST)
        if form.is_valid():
            return HttpResponseRedirect('/success/')

        return render(request, self.template_name, {'form': form})

class ee_3(TemplateView):
	template_name = "ee_4.html"

class ee_4(TemplateView):
	template_name = "ee_5.html"	

class ee_5(TemplateView):
	template_name = "ee_6.html"

class ee_6(TemplateView):
	template_name = "ee_7.html"

class ee_7(TemplateView):
	template_name = "ee_8.html"

class ee_8(TemplateView):
	template_name = "ee_final.html"
