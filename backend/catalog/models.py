from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField
from wagtail.images.api.fields import ImageRenditionField


class ProductPage(Page):
    #Define los estados posibles para el campo "status"
    STATUS_CHOICES = [
        ("preorder", "Preventa"),
        ("in_stock", "En stock"),
        ("sold_out", "Agotado"),
    ]

#Define los campos del modelo ProductPage. Cada campo tiene un tipo de dato específico.
    manufacturer = models.CharField("Fabricante", max_length=100)
    scale = models.CharField("Escala", max_length=20, blank=True)
    price_jpy = models.PositiveIntegerField("Precio (JPY)")
    status = models.CharField("Estado", max_length=20, choices=STATUS_CHOICES, default="in_stock")
    image = models.ForeignKey(
        "wagtailimages.Image",
        null=True, blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )
    description = models.TextField("Descripción", blank=True)

    #Define los paneles que se van a mostrar en el panel de admin de Wagtail
    content_panels = Page.content_panels + [
        FieldPanel("manufacturer"),
        FieldPanel("scale"),
        FieldPanel("price_jpy"),
        FieldPanel("status"),
        FieldPanel("image"),
        FieldPanel("description"),
    ]

    #Define los campos que se van a exponer en la API de Wagtail
    api_fields = [
        APIField("manufacturer"),
        APIField("scale"),
        APIField("price_jpy"),
        APIField("status"),
        APIField("description"),
        APIField("thumb", serializer=ImageRenditionField("fill-400x400", source="image")),
    ]